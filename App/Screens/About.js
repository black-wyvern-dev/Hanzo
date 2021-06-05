import * as React from 'react';
import {Text, StatusBar, Button, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const About = ({navigation}) => {
  const goToHome = () => {
    // Actions.home();
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
      <Text>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen2')}
      />
    </SafeAreaView>
    // <TouchableOpacity style={{margin: 128}} onPress={goToHome}>
    //   <Text>This is ABOUT</Text>
    // </TouchableOpacity>
  );
};
export default About;
