import React from 'react';
import { FlatList, View, StyleSheet, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';

import { Twitt } from '../../Components/twitt';
import { twitts } from '../../data';
import { StackNavigatorParamlist } from './types';

type TwittProps = React.ComponentProps<typeof Twitt>;

function renderItem({ item }: { item: TwittProps }) {
  return <Twitt {...item} />;
}

function keyExtractor(item: TwittProps) {
  return item.id.toString();
}

type Props = {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
};

export const Feed = (props: Props) => {
  const theme = useTheme();

  const data = twitts.map(twittProps => ({
    ...twittProps,
    onPress: () =>
      props.navigation &&
      props.navigation.push('Details', {
        ...twittProps,
      }),
  }));

  return (
    <ImageBackground source={{ uri: 'https://static.wixstatic.com/media/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.jpg/v1/fill/w_1370,h_3000,al_c,q_90/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.webp' }} style={{ width: "100%", height: "100%" }}>
    <FlatList
      contentContainerStyle={{ backgroundColor: 'transparent' }}
      style={{ backgroundColor: 'transparent' }}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
    </ImageBackground>
  );
};
