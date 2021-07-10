import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useTheme } from 'react-native-paper';
import { Spinner } from 'native-base';
import Separator from '../../Components/Separator';
import { useGlobals } from '../../contexts/Global';

import styles from './MusicListStyle';

const MusicList = ({ navigation }) => {
  const theme = useTheme();
  const [{ musicList }, dispatch] = useGlobals();
  const [loading, setLoading] = React.useState(false);
  console.log(musicList);
  //  console.log(musicList);
  React.useEffect(() => {
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
              data={musicList}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('MusicPlayer', { music: item })}>
                  <View style={styles.row}>
                    <View style={styles.content}>
                      <View style={styles.header}>
                        <Text style={styles.nameText}>{item.title}</Text>
                      </View>
                      <Text style={styles.contentText}>
                        {item.album + '     ' + item.artist}
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

export default MusicList;