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