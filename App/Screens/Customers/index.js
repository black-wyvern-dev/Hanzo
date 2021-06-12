import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Icon } from 'native-base';

import CustomersLayer from './CustomersLayer';

const Stack = createStackNavigator();

const CustomerPage = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="CustomersLayer" component={CustomersLayer} 
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

export default CustomerPage;