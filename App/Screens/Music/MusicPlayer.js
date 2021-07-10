import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  Image,
  ImageBackground
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import TrackPlayer from 'react-native-track-player';
import { useTrackPlayerProgress } from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';
import { useTheme, Button } from 'react-native-paper';
import { useTrackPlayerEvents } from 'react-native-track-player/lib/hooks';
import { TrackPlayerEvents, STATE_PLAYING } from 'react-native-track-player';

import styles from './MusicPlayerStyle';

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
  const { position, duration } = useTrackPlayerProgress(250);

  //initialize the TrackPlayer when the App component is mounted
  React.useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit(music);
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
    <ImageBackground source={{ uri: 'https://static.wixstatic.com/media/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.jpg/v1/fill/w_1370,h_3000,al_c,q_90/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.webp' }} style={{ width: "100%", height: "100%" }}>
      <SafeAreaView style={[styles.container]}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="rgb(234, 164, 67)"
          translucent={true}
        />
        <View style={[styles.inputContainer, { flex: 1, width: '100%' }]}>
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
                minimumTrackTintColor="rgb(74, 15, 15)"
                maximumTrackTintColor="#EAA443"
                onSlidingStart={slidingStarted}
                onSlidingComplete={slidingCompleted}
                thumbTintColor="rgb(74, 15, 15)"
              />
              <Button
                onPress={onButtonPressed}
                style={styles.playButton}
                disabled={!isTrackPlayerInit}
                labelStyle={{ color: 'rgb(74, 15, 15)' }}
                color="#EAA443"
                mode="contained"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MusicPlayer;