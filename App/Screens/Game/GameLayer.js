import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useTheme } from 'react-native-paper';

import styles from './GameLayerStyle';

// import { useGlobals } from '../../contexts/Global';

const GameLayer = ({ navigation, route }) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="rgb(234, 164, 67)"
        translucent={true}
      />
    </SafeAreaView>
  );
};

export default GameLayer;