import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
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
    <ScrollView
      style={{ backgroundColor }}
      contentContainerStyle={[styles.scrollViewContent, { backgroundColor }]}
    >
      <ShillPostForm />
    </ScrollView>
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
