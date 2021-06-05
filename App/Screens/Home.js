import * as React from 'react';
import {Text, StatusBar, Button, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export default function Home({navigation}) {
  const goToAbout = () => {
    // Actions.about();
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
      <Text>Dark Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen1')}
      />
    </SafeAreaView>
  );
}
