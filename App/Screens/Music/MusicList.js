import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Spinner } from 'native-base';
import Separator from '../../Components/Separator';

import styles from './MusicListStyle';

// import { useGlobals } from '../../contexts/Global';

const MusicList = ({navigation}) => {
  const [musics, setMusics] = React.useState([
    {
      id: '1',
      url:
        'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
      type: 'default',
      title: 'My Title',
      album: 'My Album',
      artist: 'Rohan Bhatia',
      artwork: 'https://picsum.photos/100',
   },
   {
     id: '2',
     url:
       'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
     type: 'default',
     title: 'New Title',
     album: 'New Album',
     artist: 'Liu Xing',
     artwork: 'https://picsum.photos/100',
  }
  ]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // const unsubscribe = firestore()
    //     setThreads(threads);
    //     if (loading) {
    //       setLoading(false);
    //     }
    //   });

    // return () => unsubscribe();
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
            data={musics}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('MusicPlayer', { music: item })}>
                <View style={styles.row}>
                  <View style={styles.content}>
                    <View style={styles.header}>
                      <Text style={styles.nameText}>{item.title}</Text>
                    </View>
                    <Text style={styles.contentText}>
                      {item.album+'     '+item.artist}
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
  );
};

export default MusicList;