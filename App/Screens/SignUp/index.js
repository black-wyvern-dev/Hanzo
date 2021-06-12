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
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { useTheme } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import { Icon } from 'native-base';

import styles from './SignUpStyle';

const SignUp = ({navigation}) => {
  const theme = useTheme();
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
        backgroundColor={theme.colors.text}
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
};

export default SignUp;
