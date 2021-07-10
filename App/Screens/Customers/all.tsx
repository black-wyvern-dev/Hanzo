import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import { NotificationTwitt } from '../../Components/notificationTwitt';
import { notificationTweets } from '../../data';

type NotificationTwittProps = React.ComponentProps<typeof NotificationTwitt>;

function renderItem({ item }: { item: NotificationTwittProps }) {
  return <NotificationTwitt {...item} />;
}

function keyExtractor(item: NotificationTwittProps) {
  return item.id.toString();
}

export const AllNotifications = () => {
  const theme = useTheme();

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: 'transparent' }}
      style={{ backgroundColor: 'transparent' }}
      data={notificationTweets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  );
};
