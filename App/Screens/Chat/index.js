import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChatBox from './ChatBox';
import ChatByList from './ChatByList';

// import { useGlobals } from '../../contexts/Global';

const Stack = createStackNavigator();

const ChatPage = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="ChatByList" component={ChatByList} />
        <Stack.Screen name="ChatBox" component={ChatBox} 
          options={{
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => {
                  navigation.push('ChatByList');
                }}
              />
            ),
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ChatPage;