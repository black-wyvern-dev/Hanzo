import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './HomeStyle';
import firestore from '@react-native-firebase/firestore';
import { ChatList } from 'react-chat-elements/native';
import { Spinner } from 'native-base';
// import { useGlobals } from '../../contexts/Global';
import Separator from '../../Components/Separator';

const ChatRoom = ({navigation}) => {
  const [threads, setThreads] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = firestore()
      .collection('MESSAGE_THREADS')
      .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const threads = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            name: '',
            latestMessage: { text: '' },
            ...documentSnapshot.data()
          }
        });
        // let roomList = [];
        // for(let thread of threads) {
        //   roomList.push({
        //     avatar: 'https://picsum.photos/150/150',
        //     alt: thread._id,
        //     title: thread.name,
        //     subtitle: thread.latestMessage.text.slice(0,90),
        //     date: new Date(thread.latestMessage.createdAt),
        //     unread: 0,
        //   });
        // }
        setThreads(threads);
        console.log(threads);
        if (loading) {
          setLoading(false);
        }
      });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Spinner style={{margin: 15}}/>;
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
      <View style={[styles.inputContainer, {flex: 1, width: '100%'}]}>
        <View style={styles.listContainer}>
          <FlatList
            data={threads}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Messages', { thread: item })}>
                <View style={styles.row}>
                  <View style={styles.content}>
                    <View style={styles.header}>
                      <Text style={styles.nameText}>{item.name}</Text>
                    </View>
                    <Text style={styles.contentText}>
                      {item.latestMessage.text.slice(0, 90)}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('CreateChatRoom')}>
          <Text style={[styles.content, styles.signOut,{textAlign: 'center'}]}>Create Chatroom</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatRoom;