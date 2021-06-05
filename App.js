import * as React from 'react';
import {
  Text,
  StatusBar,
  Button,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

function Screen1({ navigation }) {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true} />
      <Text>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen2')}
      />
    </SafeAreaView>
  );
}

function Screen2({ navigation }) {
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
          keyboardType="numeric"
        />
        </View>
        <TouchableOpacity
          style={[styles.button, styles.loginBtn]}
          onPress={() => navigation.navigate('Screen1')}>
        <Text style={[styles.btnText]}>Sign In</Text>
        </TouchableOpacity>
        <Text style={[styles.content, styles.hintText]}>or use one of your social profiles</Text>
        <View style={[styles.btnContainer]}>
          <TouchableOpacity
            style={[styles.button, styles.twitterBtn]}
            onPress={() => navigation.navigate('Screen1')}>
          <Text style={[styles.btnText]}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.facebookBtn]}
            onPress={() => navigation.navigate('Screen1')}>
          <Text style={[styles.btnText]}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.actionContainer]}>
          <Text style={[styles.content]}>Forgot Password?</Text>
          <Text style={[styles.content, styles.signUp]}>Sign Up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Screen1" component={Screen2} />
          <Stack.Screen name="Screen2" component={Screen1} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  mainContainer: {
    width: '70%',
    height: '90%',
    // flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 20,
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
  },
  facebookBtn: {
    backgroundColor: '#05B',
    width: '48%',
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
  }
});