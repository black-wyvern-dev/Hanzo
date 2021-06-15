import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './WalletLayerStyle';

// import { useGlobals } from '../../contexts/Global';

const WalletLayer = ({ navigation, route }) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
      <View style={[styles.inputContainer, {flex: 1, width: '100%'}]}>  
        <Text>WalletLayer</Text>
      </View>
    </SafeAreaView>
  );
};

export default WalletLayer;