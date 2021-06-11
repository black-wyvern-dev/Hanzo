import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Icon } from 'native-base';

import WalletLayer from './WalletLayer';

const Stack = createStackNavigator();

const WalletPage = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="WalletLayer" component={WalletLayer} 
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WalletPage;