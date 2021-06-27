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
  ImageBackground,
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
import CustomerPage from './Customers';
import GamePage from './Game';
import RankingPage from './Ranking';
import WalletPage from './Wallet';
import SettingsPage from './Settings';

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
      routeName: 'RankingPage',
      group: '',
    },
    {
      drawerLabel: 'Customers',
      drawerIcon: 'account-box',
      routeName: 'CustomerPage',
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
      routeName: 'WalletPage',
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
      routeName: 'SettingsPage',
      group: '1',
    },
    {
      drawerLabel: 'SignOut',
      drawerIcon: 'keyboard-return',
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
    <ImageBackground source={require('../Assets/Images/hanzo-background.jpg')} style={{ width: "100%", height: "100%" }}>
      <DrawerContentScrollView {...props}>
        <View style={[styles.containerHeader]}>
          <Icon
            name={'close'}
            type='MaterialIcons'
            style={styles.drawerCloseIcon}
            onPress={() => props.hideDrawer()}
          />
          <Image
            source={require('../Assets/Images/hanzo-logo.gif')}
            style={styles.imageProfile}
          />
          <Text style={[styles.textName]}>{/*userInfo.first_name + ' ' + userInfo.last_name*/'Sensei Hanzo'}</Text>
          {/* <Text numberOfLines={1} style={styles.textEmail}>
            {userInfo.email}
          </Text> */}
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
                        style={[styles.drawerIcon]}
                      />
                    )}
                    style={[styles.textDrawer]}
                    labelStyle={[styles.textDrawerItem]}
                    onPress={() => {
                      setDrawerSelected(index);
                      props.navigation.navigate(item.routeName);
                    }}
                  />
                  <Icon
                    name={'navigate-next'}
                    type='MaterialIcons'
                    style={[styles.drawerSuffixIcon]}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </DrawerContentScrollView>
    </ImageBackground>
  );
}

const Main = ({ navigation }) => {
  return (
    <SafeAreaProvider >
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
        <Drawer.Screen name="CustomerPage" component={CustomerPage} />
        <Drawer.Screen name="GamePage" component={GamePage} />
        <Drawer.Screen name="RankingPage" component={RankingPage} />
        <Drawer.Screen name="WalletPage" component={WalletPage} />
        <Drawer.Screen name="SettingsPage" component={SettingsPage} />
      </Drawer.Navigator>
    </SafeAreaProvider >
  );
}

export default Main;