import * as React from 'react';
import {
  Text,
  StatusBar,
  Button,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  List,
  StyleSheet,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { SocialIcon } from 'react-native-elements';
import { Icon } from 'native-base';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { WebView } from 'react-native-webview';
import { MessageList } from 'react-chat-elements/native';

import { useGlobals } from '../contexts/Global';
import styles from './MainStyle';
import HomePage from './Home';
import MusicPage from './Music';
import GamePage from './Game';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [{ userInfo }, dispatch] = useGlobals();

  const [drawerItems, setDrawerItems] = React.useState([
    {
      drawerLabel: 'Home',
      drawerIcon: 'home',
      routeName: 'HomePage',
      group: '',
    },
    {
      drawerLabel: 'Ranking',
      drawerIcon: 'assessment',
      routeName: 'Main',
      group: '',
    },
    {
      drawerLabel: 'Customers',
      drawerIcon: 'account-box',
      routeName: 'Main',
      group: '',
    },
    {
      drawerLabel: 'Music',
      drawerIcon: 'favorite',
      routeName: 'MusicPage',
      group: '',
    },
    {
      drawerLabel: 'Wallet',
      drawerIcon: 'shopping-basket',
      routeName: 'Main',
      group: '',
    },
    {
      drawerLabel: 'Game',
      drawerIcon: 'videogame-asset',
      routeName: 'GamePage',
      group: '',
    },
    {
      drawerLabel: 'Settings',
      drawerIcon: 'settings',
      routeName: 'Main',
      group: '1',
    },
    {
      drawerLabel: 'SignOut',
      drawerIcon: 'logout',
      routeName: 'SignIn',
      group: '',
    },
  ]);
  const [drawerSelected, setDrawerSelected] = React.useState(0);

  const ItemHeader = ({ item, index }) => {
    const indexPosition = drawerItems.findIndex(
      (obj) => obj.group === item.group,
    );
    if (indexPosition === index && item.group !== '') {
      return <View style={styles.divider} />;
    } else {
      return <></>;
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerHeader}>
        <Icon
          name={'close'}
          type='MaterialIcons'
          style={styles.drawerCloseIcon}
          onPress={() => props.hideDrawer()}
        />
        <Image
          source={{ uri: 'https://picsum.photos/200/200' }}
          style={styles.imageProfile}
        />
        <Text style={styles.textName}>{userInfo.firstName + ' ' + userInfo.lastName}</Text>
        <Text numberOfLines={1} style={styles.textEmail}>
          {userInfo.email}
        </Text>
      </View>
      <View style={styles.containerContent}>
        <FlatList
          data={drawerItems}
          keyExtractor={(item, index) => String(index + JSON.stringify(item))}
          renderItem={({ item, index }) => (
            <View>
              <ItemHeader item={item} index={index} />
              <View
                style={styles.itemContainer}
              >
                <DrawerItem
                  label={item.drawerLabel}
                  icon={({ color, size }) => (
                    <Icon
                      name={item.drawerIcon}
                      type='MaterialIcons'
                      style={styles.drawerIcon}
                    />
                  )}
                  style={styles.textDrawer}
                  labelStyle={styles.textDrawerItem}
                  onPress={() => {
                    setDrawerSelected(index);
                    props.navigation.navigate(item.routeName);
                  }}
                />
                <Icon
                  name={'navigate-next'}
                  type='MaterialIcons'
                  style={styles.drawerSuffixIcon}
                />
              </View>
            </View>
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const Main = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <Drawer.Navigator
        initialRouteName="HomePage"
        drawerStyle={styles.drawer}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: '#e90000',
          itemStyle: { marginVertical: 0 },
        }}
      >
        <Drawer.Screen name="HomePage" component={HomePage} />
        <Drawer.Screen name="MusicPage" component={MusicPage} />
        <Drawer.Screen name="GamePage" component={GamePage} />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
}

export default Main;