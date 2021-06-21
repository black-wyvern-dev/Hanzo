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
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Overlay } from 'react-native-elements';
import { Spinner } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { useTheme } from 'react-native-paper';
import { Icon } from 'native-base';

import styles from './SignUpStyle';

import { register } from '../../apis/auth';

const SignUp = ({navigation}) => {
  const theme = useTheme();
  const [email, onChangeEmail] = React.useState('');
  const [firstName, onChangeFirst] = React.useState('');
  const [lastName, onChangeLast] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirm, onChangeConfirm] = React.useState('');
  const [check, onCheckChanged] = React.useState(false);
  const [showProgress, setShowProgress] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('Unkown Error');
  
  const closeAlert = () => {
    setShowAlert(false);
  }

  const onCheckToggled = () => {
    onCheckChanged(!check);
  };

  const signUpHandle = async() => {
    // try{
      if (firstName =='' || lastName == '' ||email == '' || password.length < 6 || password != confirm)
      {
        setErrorMsg('Sign up Info is invalid. Try again.');
        setShowAlert(true);
        return;
      }
      setShowProgress(true);
      const {
        token,
        errors,
      } = await register({
        firstName,
        lastName,
        email,
        password,
      });
      setShowProgress(false);
      if (token) {
        console.log('Sign up succeed');
        setErrorMsg('Successfully sign up. Please wait until admin approve your account.');
        setShowAlert(true);
      } else {
        setErrorMsg(errors);
        setShowAlert(true);
      }
    // } finally {}
  }

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
        <Text style={[styles.title]}>Sign Up</Text>
        <View style={[styles.inputContainer, {marginBottom: 0}]}>
          <Text style={[styles.label]}>Firstname</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={onChangeFirst}
            value={firstName}
          />
        </View>
        <View style={[styles.inputContainer, {marginBottom: 0}]}>
          <Text style={[styles.label]}>LastName</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={onChangeLast}
            value={lastName}
          />
        </View>
        <View style={[styles.inputContainer, {marginBottom: 0}]}>
          <Text style={[styles.label]}>Email</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={onChangeEmail}
            placeholder="Your email address"
            autoCompleteType="email"
            value={email}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 0}]}>
        <Text style={[styles.label]}>Password</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
            autoCompleteType="password"
          placeholder=""
        />
        </View>
        <View style={[styles.inputContainer, {marginTop: 0}]}>
        <Text style={[styles.label]}>Password Confirm</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={onChangeConfirm}
          value={confirm}
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
          onPress={signUpHandle}>
        <Text style={[styles.btnText]}>Continue</Text>
        </TouchableOpacity>
        <View style={[styles.actionContainer]}>
          <Text style={[styles.content]}>Have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={[styles.content, styles.signUp]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Overlay isVisible={showAlert} onBackdropPress={() => closeAlert()}>
        <Text style={{margin: 15}}>{errorMsg}</Text>
        <Button title='Close' onPress={() => closeAlert()} />
      </Overlay>
      <Overlay isVisible={showProgress} onBackdropPress={() => setShowProgress(false)}>
        <Spinner style={{margin: 15}}/>
      </Overlay>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default SignUp;
