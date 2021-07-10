import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';

import { Twitt } from '../../Components/twitt';
import { twittsold } from '../../data';
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

export const FeedOld = (props: Props) => {
  const theme = useTheme();

  const data = twittsold.map(twittProps => ({
    ...twittProps,
    onPress: () =>
      props.navigation &&
      props.navigation.push('Details', {
        ...twittProps,
      }),
  }));

  return (
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
  );
};
