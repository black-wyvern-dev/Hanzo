import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { WebView } from 'react-native-webview';
import styles from './HomeStyle';

// import { useGlobals } from '../../contexts/Global';

const HomePage = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
      <View style={[styles.inputContainer, {flex: 1, width: '100%'}]}>
        <WebView 
          source={Platform.OS === 'ios' ? require('../../Assets/talkjs.html') : { uri: "file:///android_asset/talkjs.html" }}
          style={{flex: 1, width: '100%'}} 
          javaScriptEnabled={true}
          domStorageEnabled={true}
          originWhitelist={['file://', 'https://*']}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={[styles.content, styles.signOut,{textAlign: 'center'}]}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;