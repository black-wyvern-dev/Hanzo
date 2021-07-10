import React from 'react';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { Headline, Caption, useTheme, Button } from 'react-native-paper';

import overlay from './overlay';
import {ShillPostForm} from './postShill';

type Props = {
  navigation: MaterialBottomTabNavigationProp<{}>;
};

export const Message = () => {
  const theme = useTheme();

  const backgroundColor = overlay(2, theme.colors.surface) as string;

  return (
    <ImageBackground source={{ uri: 'https://static.wixstatic.com/media/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.jpg/v1/fill/w_1370,h_3000,al_c,q_90/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.webp' }} style={{ width: "100%", height: "100%" }}>

    <ScrollView
      style={{  }}
      contentContainerStyle={[styles.scrollViewContent, {  }]}
    >
      <ShillPostForm />
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 30,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
});
