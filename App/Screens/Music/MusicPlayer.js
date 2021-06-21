import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import TrackPlayer from 'react-native-track-player';
import {useTrackPlayerProgress} from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';
import { useTheme } from 'react-native-paper';
import {useTrackPlayerEvents} from 'react-native-track-player/lib/hooks';
import {TrackPlayerEvents,STATE_PLAYING} from 'react-native-track-player';

import styles from './MusicPlayerStyle';

// import { useGlobals } from '../../contexts/Global';

// const music ={
//    id: '1',
//    url:
//      'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
//    type: 'default',
//    title: 'My Title',
//    album: 'My Album',
//    artist: 'Rohan Bhatia',
//    artwork: 'https://picsum.photos/100',
// }

//function to initialize the Track Player 
const trackPlayerInit = async (music) => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(music);
  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
    ],
  });
  return true;
};

const MusicPlayer = ({ navigation, route }) => {
  const theme = useTheme();
  const { music } = route.params;
  //state to manage whether track player is initialized or not
  const [isTrackPlayerInit, setIsTrackPlayerInit] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(0);
  const [isSeeking, setIsSeeking] = React.useState(false);
  //These values will update every 250ms 
  const {position, duration} = useTrackPlayerProgress(250);

  //initialize the TrackPlayer when the App component is mounted
  React.useEffect(() => {
    const startPlayer = async () => {
       let isInit =  await trackPlayerInit(music);
       setIsTrackPlayerInit(isInit);
    }
    startPlayer();
  }, []);

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
    if (event.state === STATE_PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });
  
  //this hook updates the value of the slider whenever the current position of the song changes
  React.useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  //start playing the TrackPlayer when the button is pressed 
  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  //this function is called when the user starts to slide the seekbar
  const slidingStarted = () => {
    setIsSeeking(true);
  };
  //this function is called when the user stops sliding the seekbar
  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="rgb(234, 164, 67)"
        translucent={true}
      />
      <View style={[styles.inputContainer, {flex: 1, width: '100%'}]}>     
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: music.artwork,
              }}
              resizeMode="contain"
              style={styles.albumImage}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.songTitle}>{music.title}</Text>
            <Text style={styles.artist}>{music.artist}</Text>
          </View>
          <View style={styles.controlsContainer}>
            <Slider
              style={styles.progressBar}
              minimumValue={0}
              maximumValue={1}
              value={sliderValue}
              minimumTrackTintColor="#111000"
              maximumTrackTintColor="#000000"
              onSlidingStart={slidingStarted}
              onSlidingComplete={slidingCompleted}
              thumbTintColor="#000"
            />
            <Button
              title={isPlaying ? 'Pause' : 'Play'}
              onPress={onButtonPressed}
              style={styles.playButton}
              disabled={!isTrackPlayerInit}
              color="#000000"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;