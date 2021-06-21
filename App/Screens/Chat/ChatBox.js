import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { MessageList } from 'react-chat-elements/native';

import styles from './ChatBoxStyle';

// import { useGlobals } from '../../contexts/Global';

const ChatPage = ({navigation}) => {
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
        <Text>Chat Page</Text>
        <MessageList
          className='message-list'
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={[
              {
                  position: 'right',
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                  date: new Date(),
              }, {
                  position: 'left',
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                  date: new Date(),
              }, {
                  position: 'right',
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                  date: new Date(),
              },
          ]} />
      </View>
    </SafeAreaView>
  );
};

export default ChatPage;