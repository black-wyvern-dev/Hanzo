import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Icon } from 'native-base';

import RankDetail from './RankDetail';
import RankList from './RankList';

const Stack = createStackNavigator();

const RankingPage = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="RankList" component={RankList} 
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
        <Stack.Screen name="RankDetail" component={RankDetail} 
          options={({navigation, route}) => ({
            headerLeft: () => (
              <Icon
                name='navigate-before'
                type='MaterialIcons'
                style={{fontSize: 28, marginLeft: 10}}
                onPress={() => {
                  navigation.navigate('RankList');
                }}
              />
            ),
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RankingPage;