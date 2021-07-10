import * as React from 'react';
import {
  Text,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Picker,
  ScrollView,
  ImageBackground
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Separator from '../../Components/Separator';
import { useTheme } from 'react-native-paper';

import styles from './RankListStyle';

// import { useGlobals } from '../../contexts/Global';

const RankList = ({ navigation }) => {
  const theme = useTheme();
  const [users, setUsers] = React.useState([
    { userName: 'Joe', avatar: 'https://picsum.photos/100', highScore: 300 },
    { userName: 'Jenny', avatar: 'https://picsum.photos/101', highScore: 298 },
    { userName: 'Honey', avatar: 'https://picsum.photos/102', highScore: 287 },
    { userName: 'Bob', avatar: 'https://picsum.photos/103', highScore: 276 },
    { userName: 'Jhon', avatar: 'https://picsum.photos/104', highScore: 274 },
    { userName: 'Devil', avatar: 'https://picsum.photos/105', highScore: 273 },
    { userName: 'Dave', avatar: 'https://picsum.photos/106', highScore: 261 },
    { userName: 'Hansen', avatar: 'https://picsum.photos/107', highScore: 240 },
    { userName: 'Crowl', avatar: 'https://picsum.photos/108', highScore: 218 },
    { userName: 'Henry', avatar: 'https://picsum.photos/109', highScore: 208 },
    { userName: 'Paul', avatar: 'https://picsum.photos/110', highScore: 203 },
    { userName: 'Peter', avatar: 'https://picsum.photos/111', highScore: 202 },
    { userName: 'Poster', avatar: 'https://picsum.photos/112', highScore: 201 },
    { userName: 'Hamos', avatar: 'https://picsum.photos/113', highScore: 192 },
    { userName: 'Crieon', avatar: 'https://picsum.photos/114', highScore: 184 },
    { userName: 'Montred', avatar: 'https://picsum.photos/115', highScore: 182 },
    { userName: 'Sotana', avatar: 'https://picsum.photos/111', highScore: 176 },
    { userName: 'Jhonson', avatar: 'https://picsum.photos/112', highScore: 171 },
    { userName: 'Julia', avatar: 'https://picsum.photos/113', highScore: 167 },
    { userName: 'Cisco', avatar: 'https://picsum.photos/114', highScore: 161 },
    { userName: 'Royal', avatar: 'https://picsum.photos/115', highScore: 155 },
    { userName: 'Soul', avatar: 'https://picsum.photos/110', highScore: 151 },
    { userName: 'Solia', avatar: 'https://picsum.photos/111', highScore: 143 },
    { userName: 'Corina', avatar: 'https://picsum.photos/112', highScore: 132 },
    { userName: 'Volt', avatar: 'https://picsum.photos/113', highScore: 126 },
    { userName: 'Maximus', avatar: 'https://picsum.photos/114', highScore: 118 },
    { userName: 'Fafwau', avatar: 'https://picsum.photos/115', highScore: 103 },
    { userName: 'Forton', avatar: 'https://picsum.photos/111', highScore: 96 },
    { userName: 'Seenso', avatar: 'https://picsum.photos/112', highScore: 67 },
    { userName: 'Jordan', avatar: 'https://picsum.photos/113', highScore: 52 },
    { userName: 'George', avatar: 'https://picsum.photos/114', highScore: 43 },
    { userName: 'Contint', avatar: 'https://picsum.photos/115', highScore: 25 },
  ])
  let [filteredUsers, setFilteredUsers] = React.useState([
    { userName: 'Joe', avatar: 'https://picsum.photos/100', highScore: 300 },
    { userName: 'Jenny', avatar: 'https://picsum.photos/101', highScore: 298 },
    { userName: 'Honey', avatar: 'https://picsum.photos/102', highScore: 287 },
    { userName: 'Bob', avatar: 'https://picsum.photos/103', highScore: 276 },
    { userName: 'Jhon', avatar: 'https://picsum.photos/104', highScore: 274 },
    { userName: 'Devil', avatar: 'https://picsum.photos/105', highScore: 273 },
    { userName: 'Dave', avatar: 'https://picsum.photos/106', highScore: 261 },
    { userName: 'Hansen', avatar: 'https://picsum.photos/107', highScore: 240 },
    { userName: 'Crowl', avatar: 'https://picsum.photos/108', highScore: 218 },
    { userName: 'Henry', avatar: 'https://picsum.photos/109', highScore: 208 },
  ])
  return (
    <ImageBackground source={{ uri: 'https://static.wixstatic.com/media/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.jpg/v1/fill/w_1370,h_3000,al_c,q_90/caf856_dfbf5ef9517d41c7abe3dd4e1db08796~mv2.webp' }} style={{ width: "100%", height: "100%" }}>
      <SafeAreaView style={[styles.container]}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="rgb(234, 164, 67)"
          translucent={true}
        />
        <Picker
          style={{ height: 50, width: "100%" }}
          onValueChange={(itemValue, itemIndex) => {
            let customUsers = [];
            for (let i = 0; i < itemValue; i++) {
              if (i >= users.length)
                break;
              customUsers.push(users[i]);
            }
            setFilteredUsers(customUsers);
            console.log(customUsers.length)
          }}
        >
          <Picker.Item label="Choose number of top users...." value="10" />
          <Picker.Item label="Number of top users: 10" value="10" />
          <Picker.Item label="Number of top users: 20" value="20" />
          <Picker.Item label="Number of top users: 50" value="50" />
        </Picker>
        <Text style={{ fontSize: 22 }}>
          Rank List
        </Text>
        <View style={[styles.row]}>
          <View style={styles.left}>
            <ScrollView >
              <FlatList
                data={filteredUsers}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('RankDetail')}>
                    <View style={styles.row}>
                      <View style={styles.left}>
                        <Text
                          style={styles.rank}
                        >
                          {index + 1}
                        </Text>
                        <Image
                          source={{ uri: item['avatar'] }}
                          style={styles.avatar}
                        />
                        <Text style={styles.label} numberOfLines={1}>
                          {item['userName']}
                        </Text>
                      </View>
                      <Text style={styles.score}>
                        {item['highScore'] || 0}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <Separator />}
              />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RankList;