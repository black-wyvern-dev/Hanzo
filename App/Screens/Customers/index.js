import * as React from 'react';
import {NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity, View } from 'react-native';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { Icon } from 'native-base';

// import CustomersLayer from './CustomersLayer';
import { BottomTabs } from './bottomTabs';
import { Details } from './details';
import { useGlobals } from '../../contexts/Global';
// import { StackNavigatorParamlist } from './types';


const Stack = createStackNavigator();

const CustomerPage = ({navigation}) => {
  const [{ userInfo }, dispatch] = useGlobals();
  const theme = useTheme();
  const superNavigation = navigation;
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <Appbar.Header
              theme={{ colors: { primary: theme.colors.surface } }}
              style={{marginTop: 30, backgroundColor: 'rgb(234, 164, 67)'}}
            >
              {title !== 'Feed' ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    superNavigation.openDrawer();
                  }}
                >
                  <Icon
                    name='home'
                    type='MaterialIcons'
                    style={{
                      fontSize: 20,
                      marginRight: 10,
                      // color: theme.colors.primary
                      color: '#4F0F0F',
                      }}
                    onPress={() => {
                      superNavigation.openDrawer();
                    }}
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                title={
                  title === 'Feed' ? (
                    'Shill Room'
                  ) : (
                    title
                  )
                }
                titleStyle={{
                  fontSize: 26,
                  fontFamily: 'Bradleys Pen',
                  // fontWeight: 'bold',
                  // color: theme.colors.primary,
                  color: '#4F0F0F',
                  alignSelf: 'center',
                }}
              />
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen
        name="FeedList"
        component={BottomTabs}
        options={({ route }) => {
          // const routeName = getFocusedRouteNameFromRoute(route) ?? ;
          return { headerTitle: 'Feed' };
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Shill Room' }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CustomerPage;