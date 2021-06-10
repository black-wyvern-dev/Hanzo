import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

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
          options={{
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                // onPress={() => {
                //   Stack.push('CreateChatRoom');
                // }}
              />
            ),
          }}
          />
        <Stack.Screen name="CreateChatRoom" component={CreateChatRoom} 
          options={{
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                // onPress={() => {
                //   // navigation.navigate('ChatRoom');
                // }}
              />
            ),
          }}
      />
        <Stack.Screen
          name='Messages'
          component={Messages}
          options={({ route }) => ({
            title: route.params.thread.name
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomePage;