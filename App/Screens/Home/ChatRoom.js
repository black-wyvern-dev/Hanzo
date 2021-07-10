import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './HomeStyle';
import firestore from '@react-native-firebase/firestore';
import { useTheme } from 'react-native-paper';
import { Spinner } from 'native-base';
// import { useGlobals } from '../../contexts/Global';
import Separator from '../../Components/Separator';

const ChatRoom = ({ navigation }) => {
  const theme = useTheme();
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
        setThreads(threads);
        if (loading) {
          setLoading(false);
        }
      });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Spinner style={{ margin: 15 }} />;
  }

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
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ChatRoom;