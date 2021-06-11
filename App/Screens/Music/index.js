import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import { Icon } from 'native-base';


import MusicPlayer from './MusicPlayer';
import MusicList from './MusicList';
const Stack = createStackNavigator();

const MusicPage = ({navigation}) => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="MusicList" component={MusicList} 
          options={({navigation, route}) => ({
            headerLeft: () => (
              <Icon
                name='home'
                type='MaterialIcons'
                style={{fontSize: 20, marginLeft: 10}}
                onPress={() => {
                }}
              />
            ),
          })} />
        <Stack.Screen name="MusicPlayer" component={MusicPlayer} 
          options={({navigation, route}) => ({
            headerLeft: () => (
              <Icon
                name='navigate-before'
                type='MaterialIcons'
                style={{fontSize: 28, marginLeft: 10}}
                onPress={() => {
                  navigation.navigate('MusicList');
                }}
              />
            ),
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MusicPage;