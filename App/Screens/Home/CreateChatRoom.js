import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './HomeStyle';
import firestore from '@react-native-firebase/firestore';

// import { useGlobals } from '../../contexts/Global';

const CreateChatRoom = ({navigation}) => {
  const theme = useTheme();
  const [roomName, setRoomName] = React.useState('');

  const handleButtonPress = () => {
    if (roomName.length > 0) {
      // create new thread using firebase & firestore
      firestore()
        .collection('MESSAGE_THREADS')
        .add({
          name: roomName,
          latestMessage: {
            text: `${roomName} created. Welcome!`,
            createdAt: new Date().getTime()
          }
        })
        .then(docRef => {
          docRef.collection('MESSAGES').add({
            text: `${roomName} created. Welcome!`,
            createdAt: new Date().getTime(),
            system: true
          })
          navigation.navigate('ChatRoom')
        })
    }
  };

  return (

    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={theme.colors.text}
        translucent={true}
      />
      <View style={[styles.inputContainer, {flex: 1, width: '100%'}]}>
        <TextInput
          style={[styles.input]}
          onChangeText={setRoomName}
          placeholder="New room id"
          value={roomName}
        />
        <TouchableOpacity onPress={()=>handleButtonPress()}>
          <Button style={[{textAlign: 'center'}]} title={'Create Chatroom'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateChatRoom;