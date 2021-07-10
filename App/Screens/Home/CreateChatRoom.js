import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { useTheme, Button, } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './HomeStyle';
import firestore from '@react-native-firebase/firestore';

// import { useGlobals } from '../../contexts/Global';

const CreateChatRoom = ({ navigation }) => {
  const theme = useTheme();
  const [roomName, setRoomName] = React.useState('');

  const handleButtonPress = () => {
    console.log('okokokokokook');

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
    <ImageBackground source={{ uri: 'https://static.wixstatic.com/media/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.jpg/v1/fill/w_1370,h_3000,al_c,q_90/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.webp' }} style={{ width: "100%", height: "100%" }}>
      <SafeAreaView style={[styles.container]}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="rgb(234, 164, 67)"
          translucent={true}
        />
        <View style={[styles.inputContainer, { flex: 1, width: '100%' }]}>
          <TextInput
            style={styles.input}
            onChangeText={setRoomName}
            placeholder="New room id"
            value={roomName}
          />
          <TouchableOpacity >
            <Button
              style={[{ textAlign: 'center', width: '60%', alignSelf: 'center' }]}
              onPress={handleButtonPress}
              labelStyle={{ color: 'rgb(74, 15, 15)' }}
              color="#EAA443"
              mode="contained">
              Create Chatroom
            </Button>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CreateChatRoom;