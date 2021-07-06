import * as React from 'react';
import {
  Text,
  StatusBar,
  ImageBackground,
  View,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import { WebView } from 'react-native-webview'

import styles from './WalletLayerStyle';

// import { useGlobals } from '../../contexts/Global';

const WalletLayer = ({ navigation, route }) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="rgb(234, 164, 67)"
        translucent={true}
      />
      <View style={[styles.inputContainer, { flex: 1, width: '100%', backgroundColor: 'rgb(234, 164, 67)' }]}>
        <WebView
          source={{ uri: 'https://app.uniswap.org/#/swap?theme=dark&use=v2&slippage=4.00&inputCurrency=ETH&outputCurrency=0x239dc02a28a0774738463e06245544a72745d5c5' }}
          style={{
            flex: 1,
          }} // OR style={{height: 100, width: 100}}
        />
      </View>
    </SafeAreaView>
  );
};

export default WalletLayer;