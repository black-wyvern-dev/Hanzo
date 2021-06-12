import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Separator from '../../Components/Separator';

import styles from './GameListStyle';

// import { useGlobals } from '../../contexts/Global';

const GameList = ({ navigation }) => {
  const [musics, setMusics] = React.useState([
    {
      id: '1',
      url:
        'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
      type: 'default',
      title: 'My Title',
      album: 'My Album',
      artist: 'Rohan Bhatia',
      artwork: 'https://picsum.photos/100',
    },
    {
      id: '2',
      url:
        'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
      type: 'default',
      title: 'New Title',
      album: 'New Album',
      artist: 'Liu Xing',
      artwork: 'https://picsum.photos/100',
    }
  ]);
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
    </SafeAreaView>
  );
};

export default GameList;