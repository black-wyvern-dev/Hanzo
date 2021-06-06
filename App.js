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
  StyleSheet,
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

const Drawer = createDrawerNavigator();

function SignIn({ navigation }) {
  const [text, onChangeText] = React.useState('example@email.com');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
      <View style={[styles.mainContainer]}>
        <View style={[styles.logoContainer]}>
          <Image
            style={[styles.logo]}
            resizeMode='contain'
            source={require('./App/Assets/Images/logo.png')}
          />
        </View>
        <Text style={[styles.title]}>Sign In</Text>
        <Text style={[styles.content]}>Hi there! Nice to see you again.</Text>
        <View style={[styles.inputContainer, {marginBottom: 0}]}>
          <Text style={[styles.label]}>Email</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={onChangeText}
            placeholder="Your email address"
            autoCompleteType="email"
            value={text}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 0}]}>
        <Text style={[styles.label]}>Password</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={onChangeNumber}
          value={number}
          placeholder=""
          secureTextEntry={true}
            autoCompleteType="password"
        />
        </View>
        <TouchableOpacity
          style={[styles.button, styles.loginBtn]}
          onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.btnText]}>Sign In</Text>
        </TouchableOpacity>
        <Text style={[styles.content, styles.hintText]}>or use one of your social profiles</Text>
        <View style={[styles.btnContainer]}>
          <TouchableOpacity
            style={[styles.button, styles.twitterBtn]}
            onPress={() => navigation.navigate('SignIn')}>
            <SocialIcon
              style={styles.btnIcon}
              iconSize= {18}
              raised={false}
              type='twitter'
            />
            <Text style={[styles.btnText]}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.facebookBtn]}
            onPress={() => navigation.navigate('SignIn')}>
            <SocialIcon
              style={styles.btnIcon}
              iconSize= {18}
              raised={false}
              type='facebook'
            />
            <Text style={[styles.btnText]}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.actionContainer]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={[styles.content]}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={[styles.content, styles.signUp]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function SignUp({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [check, onCheckChanged] = React.useState(false);
  const onCheckToggled = () => {
    onCheckChanged(!check);
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
      <View style={[styles.mainContainer]}>
        <Text style={[styles.title]}>Sign Up</Text>
        <View style={[styles.inputContainer, {marginBottom: 0}]}>
          <Text style={[styles.label]}>Email</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={onChangeText}
            placeholder="Your email address"
            autoCompleteType="email"
            value={text}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 0}]}>
        <Text style={[styles.label]}>Password</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={onChangeNumber}
          value={number}
          secureTextEntry={true}
            autoCompleteType="password"
          placeholder=""
        />
        </View>
        <View style={[styles.checkContainer]}>
          <TouchableOpacity
            onPress={onCheckToggled}
          >
            <Icon
              name='done'
              type='MaterialIcons'
              style={[styles.checkBox, check?{}: styles.checkBoxActive]}
            />
          </TouchableOpacity>
          <View style={[styles.checkTextContainer]}>
            <Text style={[styles.content]}>I agree to the </Text>
            <Text style={[styles.content, styles.link]}>Terms of Services</Text>
            <Text style={[styles.content]}> and </Text>
            <Text style={[styles.content, styles.link]}>Privacy Policy.</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.signUpBtn, !check?{}: styles.signUpActive]}
          disabled={!check}
          onPress={() => navigation.navigate('SignUp')}>
        <Text style={[styles.btnText]}>Continue</Text>
        </TouchableOpacity>
        <View style={[styles.actionContainer]}>
          <Text style={[styles.content]}>Have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={[styles.content, styles.signUp]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const HomePage = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
      <View style={[styles.inputContainer, {marginTop: 20}]}>
        <Text>HomePage</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={[styles.content, styles.signUp]}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

function CustomDrawerContent(props) {
  const [drawerItems, setDrawerItems] = React.useState([
    {
      drawerLabel: 'Home',
      drawerIcon: 'home',
      routeName: 'Home',
      group: '',
    },
    {
      drawerLabel: 'Ranking',
      drawerIcon: 'assessment',
      routeName: 'Home',
      group: '',
    },
    {
      drawerLabel: 'Customers',
      drawerIcon: 'account-box',
      routeName: 'Home',
      group: '',
    },
    {
      drawerLabel: 'Music',
      drawerIcon: 'favorite',
      routeName: 'Home',
      group: '',
    },
    {
      drawerLabel: 'Wallet',
      drawerIcon: 'shopping-basket',
      routeName: 'Home',
      group: '',
    },
    {
      drawerLabel: 'Game',
      drawerIcon: 'videogame-asset',
      routeName: 'Home',
      group: '',
    },
    {
      drawerLabel: 'Settings',
      drawerIcon: 'settings',
      routeName: 'Home',
      group: '1',
    },
  ]);
  const [drawerSelected, setDrawerSelected] = React.useState(0);
  
  const ItemHeader = ({item, index}) => {
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
        />
        <Image
          source={{uri: 'https://picsum.photos/200/200'}}
          style={styles.imageProfile}
        />
        <Text style={styles.textName}>User</Text>
        <Text numberOfLines={1} style={styles.textEmail}>
          useremail@email.com
        </Text>
      </View>
      {/* <DrawerItemList {...props} /> */}
      <View style={styles.containerContent}>
        <FlatList 
          data={drawerItems}
          keyExtractor={(item, index) => String(index + JSON.stringify(item))}
          renderItem={({item, index}) => (
            <View>
              <ItemHeader item={item} index={index} />
              <View
                style={styles.itemContainer}
              >
              <DrawerItem
                label={item.drawerLabel}
                icon={({color, size}) => (
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

function Home ({navigation}) {
  
  return(
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
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  /********** Sign In Screen**********/
  container: {
    width: '100%',
    // height: '100%',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  mainContainer: {
    width: '70%',
    // height: '90%',
    // flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#555',
  },
  content: {
    color: '#888',
  },
  inputContainer: {
    marginVertical: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#DDD',
    paddingBottom: 1,
    marginBottom: 10,
  },
  label: {
    color: 'red',
    fontSize: 14,
  },
  button: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    width: '100%',
  },
  loginBtn: {
    backgroundColor: '#F66',
  },
  signUpBtn: {
    backgroundColor: '#FBB',
  },
  signUpActive: {
    backgroundColor: '#F66',
  },
  btnIcon: {
    backgroundColor: 'transparent',
    marginRight: 10,
    width: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  btnContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  twitterBtn: {
    backgroundColor: '#09F',
    width: '48%',
    flexDirection: 'row',
    paddingRight: 10,
  },
  facebookBtn: {
    backgroundColor: '#05B',
    width: '48%',
    flexDirection: 'row',
    paddingRight: 10,
  },
  hintText: {
    alignSelf: 'center',
    marginTop: 15,
  },
  actionContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signUp: {
    color: '#F66',
  },

  /********** Sign In Screen**********/
  checkContainer: {
    flexDirection: 'row',
    marginBottom: 35,
  },
  checkBox: {
    marginRight: 10,
    marginTop: 3,
    backgroundColor: '#F66',
    color: 'white',
    height: 15,
    width: 15,
    fontSize: 14,
    textAlign: 'center',
    borderRadius: 3,
  },
  checkBoxActive: {
    color: '#F66',
  },
  checkTextContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link: {
    color: '#F66',
  },

  /*******Drawer********/
  drawer: {
    width: 200,
  },
  containerHeader: {
    paddingTop: 50,
    paddingBottom: 60,
    alignItems: 'center',
  },
  imageProfile: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  textName: {
    marginTop: 15,
    fontSize: 16,
    color: 'black',
    //fontFamily: 'Montserrat-Bold',
  },
  textEmail: {
    fontSize: 12,
    color: 'gray',
    //fontFamily: 'Montserrat-Regular',
  },
  containerContent: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  divider: {
    height: 1,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginVertical: 25,
  },
  textDrawer: {
    marginTop: 0,
    marginLeft: -5,
    borderRadius: 0,
    paddingLeft: 5,
    width: '105%',
    height: '100%',
    // backgroundColor: 'gray',
  },
  textDrawerItem: {
    fontSize: 13,
    color: 'black',
    //fontFamily: 'Montserrat-SemiBold',
    marginLeft: -20,
  },
  drawerIcon: {
    color: 'lightgray',
    fontSize: 20,
  },
  drawerSuffixIcon: {
    color: 'lightgray',
    fontSize: 16,
    position: 'absolute',
    right: 20,
    top: 14,
  },
  drawerCloseIcon: {
    fontSize: 22,
    color: '#f66',
    position: 'absolute',
    top: 15,
    left: 15,
  },
});