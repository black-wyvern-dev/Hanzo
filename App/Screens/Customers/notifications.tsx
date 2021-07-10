import React from 'react';
import color from 'color';
import { Dimensions, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// import overlay from './overlay';
import { FeedOld } from './feedold';
import { AllNotifications } from './all';

const initialLayout = { width: Dimensions.get('window').width };

const All = () => <AllNotifications />;

const Mentions = () => <FeedOld />;

export const Notifications = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'mentions', title: 'Post of yesterday' },
    // { key: 'all', title: 'All' },
  ]);

  const theme = useTheme();

  const renderScene = SceneMap({
    all: All,
    mentions: Mentions,
  });

  const tabBarColor = //theme.dark
    // ? (overlay(4, theme.colors.surface) as string)
     theme.colors.primary;

  const rippleColor = theme.dark
    ? color(tabBarColor).lighten(0.5)
    : color(tabBarColor).darken(0.2);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary }}
      style={{ backgroundColor: tabBarColor, shadowColor: theme.colors.text }}
      labelStyle={{ color: theme.colors.primary }}
      pressColor={rippleColor}
    />
  );

  return (
    <ImageBackground source={{ uri: 'https://static.wixstatic.com/media/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.jpg/v1/fill/w_1370,h_3000,al_c,q_90/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.webp' }} style={{ width: "100%", height: "100%" }}>
    <React.Fragment>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </React.Fragment>
    </ImageBackground>
  );
};
