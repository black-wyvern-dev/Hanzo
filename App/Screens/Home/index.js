import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import { Icon } from 'native-base';

import CreateChatRoom from './CreateChatRoom';
import ChatRoom from './ChatRoom';
import Messages from './Messages';

// import { useGlobals } from '../../contexts/Global';

const Stack = createStackNavigator();

const HomePage = ({navigation}) => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="ChatRoom" component={ChatRoom}
          options={({navigation, route}) => ({
            headerLeft: () => (
              <Icon
                name='add'
                type='MaterialIcons'
                style={{fontSize: 24, marginLeft: 10}}
                onPress={() => {
                  navigation.navigate('CreateChatRoom');
                }}
              />
            ),
          })} />
        <Stack.Screen name="CreateChatRoom" component={CreateChatRoom} 
          options={({navigation, route}) => ({
            headerLeft: () => (
              <Icon
                name='navigate-before'
                type='MaterialIcons'
                style={{fontSize: 28, marginLeft: 10}}
                onPress={() => {
                  navigation.navigate('ChatRoom');
                }}
              />
            ),
          })} />
        <Stack.Screen
          name='Messages'
          component={Messages}
          options={({ navigation, route }) => ({
            headerLeft: () => (
              <Icon
                name='navigate-before'
                type='MaterialIcons'
                style={{fontSize: 28, marginLeft: 10}}
                onPress={() => {
                  navigation.navigate('ChatRoom');
                }}
              />
            ),
            title: route.params.thread.name
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomePage;