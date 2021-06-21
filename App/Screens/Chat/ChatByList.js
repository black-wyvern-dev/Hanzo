import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { ChatList } from 'react-chat-elements/native';

import styles from './ChatByListStyle';

// import { useGlobals } from '../../contexts/Global';

const ChatByList = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="rgb(234, 164, 67)"
        translucent={true}
      />
      <View style={[styles.inputContainer, {flex: 1, width: '100%'}]}>
        <Text>Chat List</Text>
        <ChatList
          className='chat-list'
          dataSource={[
              {
                  avatar: 'https://facebook.github.io/react/img/logo.svg',
                  alt: 'Reactjs',
                  title: 'Facebook',
                  subtitle: 'What are you doing?',
                  date: new Date(),
                  unread: 0,
              },
              {
                  avatar: 'https://facebook.github.io/react/img/logo.svg',
                  alt: 'Reactjs',
                  title: 'Facebook',
                  subtitle: 'What are you doing?',
                  date: new Date(),
                  unread: 0,
              },
              {
                  avatar: 'https://facebook.github.io/react/img/logo.svg',
                  alt: 'Reactjs',
                  title: 'Facebook',
                  subtitle: 'What are you doing?',
                  date: new Date(),
                  unread: 0,
              },
          ]} />
      </View>
    </SafeAreaView>
  );
};

export default ChatByList;