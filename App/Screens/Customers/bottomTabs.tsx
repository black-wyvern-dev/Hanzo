import React from 'react';
import color from 'color';
import {ImageBackground} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { useSafeArea } from 'react-native-safe-area-context';
import { useIsFocused, RouteProp } from '@react-navigation/native';

import overlay from './overlay';
import { Feed } from './feed';
import { Message } from './message';
import { Notifications } from './notifications';
import { StackNavigatorParamlist } from './types';
import { useGlobals } from '../../contexts/Global';

const Tab = createMaterialBottomTabNavigator();

type Props = {
  route: RouteProp<StackNavigatorParamlist, 'FeedList'>;
};

export const BottomTabs = (props: Props) => {
  const [{ userInfo }, dispatch] = useGlobals();

  const routeName = props.route;//.state
    //? props.route.state.routes[props.route.state.index].name
   // : 'Feed';

  const theme = useTheme();
  const safeArea = useSafeArea();
  const isFocused = useIsFocused();

  let icon = 'feather';

  switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  }

  const tabBarColor = theme.dark
    ? (overlay(6, theme.colors.surface) as string)
    : theme.colors.surface;

  return (
    // <ImageBackground source={{ uri: 'https://static.wixstatic.com/media/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.jpg/v1/fill/w_1370,h_3000,al_c,q_90/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.webp' }} style={{ width: "100%", height: "100%" }}>

    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={'rgb(74, 15, 15)'}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="New"
          component={Feed}
          options={{
            tabBarIcon: 'bell-outline',
            tabBarColor: '#EAA443',
          }}
        />
        <Tab.Screen
          name="Missed"
          component={Notifications}
          options={{
            tabBarIcon: 'bell-alert-outline',
            tabBarColor: '#EAA443',
          }}
        />
        {
          userInfo.role == '1'?
          <Tab.Screen
            name="Messages"
            component={Message}
            options={{
              tabBarIcon: 'message-text-outline',
              tabBarColor: '#EAA443'
            }}
          />
          : <></>
        }
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={{
            position: 'absolute',
            bottom: safeArea.bottom + 65,
            right: 16,
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
          onPress={() => {}}
        />
      </Portal>
    </React.Fragment>
    // </ImageBackground>

  );
};
