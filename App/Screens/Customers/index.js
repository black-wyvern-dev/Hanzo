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
              style={{marginTop: 30}}
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
                    // ((navigation as any) as DrawerNavigationProp<{}>).openDrawer();
                  }}
                >
                  <Avatar.Image
                    size={40}
                    source={{
                      uri:
                        'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                    }}
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                title={
                  title === 'Feed' ? (
                    <Icon
                      name='twitter'
                      type='MaterialCommunityIcons'
                      style={{fontSize: 20, marginRight: 10, color: theme.colors.primary}}
                      onPress={() => {
                      }}
                    />
                  ) : (
                    title
                  )
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary,
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
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
          return { headerTitle: routeName };
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Tweet' }}
      />
    </Stack.Navigator>
      {/* <Stack.Navigator>
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
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default CustomerPage;