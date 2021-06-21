import * as React from 'react';
import {
  Text,
  StatusBar,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  List,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Spinner } from 'native-base';
import { useTheme } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { SocialIcon } from 'react-native-elements';
import { Icon } from 'native-base';

import { login, logo_request } from '../../apis/auth';
import { baseUrl } from '../../apis/baseApi';
import { getMusicList } from '../../apis/update';

import { useGlobals } from '../../contexts/Global';
import styles from './SignInStyle';
import color from 'color';

const SignIn = ({ navigation }) => {
  const theme = useTheme();
  const [{ userInfo, deviceToken }, dispatch] = useGlobals();
  const [userID, setUserID] = React.useState('user@gmail.com');
  const [password, setPassword] = React.useState('123456');
  const [showProgress, setShowProgress] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('Unkown Error');

  const closeAlert = () => {
    setShowAlert(false);
  }

  const _handleContinue = async () => {
    try {
      setShowProgress(true);
      const {
        data,
        token,
        errors,
      } = await login(userID, password, deviceToken.token);
      dispatch({
        type: 'setUserInfo',
        fields: {
          ...data,
          token,
        },
      });
      setShowProgress(false);
      if (token) {
        console.log(data.active);
        if (data.active != '1') {
          console.log('User is not approved');
          setErrorMsg('User is not approved');
          setShowAlert(true);
        } else {
          console.log('SignIn Succeed');
          dispatch({
            type: 'setUserInfo',
            fields: {
              ...data,
              token,
            },
          });
          navigation.navigate('Main');
        }
      } else {
        setErrorMsg(errors);
        setShowAlert(true);
      }
    } finally {
    }
  };

  return (
    <ImageBackground source={require('../../Assets/Images/hanzo-background.jpg')} style={{ width: "100%", height: "100%" }}>
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="rgb(234, 164, 67)"
        translucent={true}
      />
      <View style={[styles.mainContainer]}>
        <View style={[]}>
          <Image
            style={[styles.logo]}
            resizeMode='contain'
            source={require('../../Assets/Images/hanzo-logo.gif')}
          />
        </View>
        <Text style={[styles.logoTitle]}>Sensei Hanzo</Text>
        <Text style={[styles.title]}>Sign In</Text>
        <Text style={[styles.content]}>Hi there! Nice to see you again.</Text>
        <View style={[styles.inputContainer, { marginBottom: 0 }]}>
          <Text style={[styles.label]}>Email</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={setUserID}
            placeholder="Your email address"
            autoCompleteType="email"
            value={userID}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 0 }]}>
          <Text style={[styles.label]}>Password</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={setPassword}
            value={password}
            placeholder=""
            secureTextEntry={true}
            autoCompleteType="password"
          />
        </View>
        <TouchableOpacity
          style={[styles.button, styles.loginBtn]}
          onPress={() => _handleContinue()}>
          <Text style={[styles.btnText]}>Sign In</Text>
        </TouchableOpacity>
        <Text style={[styles.content, styles.hintText]}>or use one of your social profiles</Text>
        <View style={[styles.btnContainer]}>
          <TouchableOpacity
            style={[styles.button, styles.twitterBtn]}
            onPress={() => navigation.navigate('SignIn')}>
            <SocialIcon
              style={styles.btnIcon}
              iconSize={18}
              raised={false}
              type='twitter'
            />
            <Text style={[styles.btnText, {color: "white"}]}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.facebookBtn]}
            onPress={() => navigation.navigate('SignIn')}>
            <SocialIcon
              style={styles.btnIcon}
              iconSize={18}
              raised={false}
              type='facebook'
            />
            <Text style={[styles.btnText, {color: "white"}]}>Facebook</Text>
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
      <Overlay isVisible={showAlert} onBackdropPress={() => closeAlert()}>
        <Text style={{ margin: 15 }}>{errorMsg}</Text>
        <Button title='Close' onPress={() => closeAlert()} />
      </Overlay>
      <Overlay isVisible={showProgress}
        overlayBackgroundColor= 'rgb(234,164,67)'
        onBackdropPress={() => setShowProgress(false)}
        >
        <Spinner style={{ margin: 15}} />
      </Overlay>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default SignIn;
