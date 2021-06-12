import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Icon } from 'native-base';

import GameLayer from './GameLayer';
import GameList from './GameList';

const Stack = createStackNavigator();

const GamePage = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="GameList" component={GameLayer} 
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
        <Stack.Screen name="GameLayer" component={GameLayer} 
          options={({navigation, route}) => ({
            headerLeft: () => (
              <Icon
                name='navigate-before'
                type='MaterialIcons'
                style={{fontSize: 28, marginLeft: 10}}
                onPress={() => {
                  navigation.navigate('GameList');
                }}
              />
            ),
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GamePage;