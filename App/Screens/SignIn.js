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
  StyleSheet,
} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Spinner } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { SocialIcon } from 'react-native-elements';
import { Icon } from 'native-base';

import { login, logo_request } from '../apis/auth';
import { baseUrl } from '../apis/baseApi';
import { resend } from '../apis/update';

import { useGlobals } from '../contexts/Global';

// let agentId = -1;
// let rqstToken = '';
// let respData = {};
// let self;
// let intervalNumber = 0;
// let userData;

const SignIn = ({navigation}) => {
  const [{ userInfo }, dispatch] = useGlobals();
  const [userID, setUserID] = React.useState('user@gmail.com');
  const [password, setPassword] = React.useState('123456');
  const [showAlert, setShowAlert] = React.useState(false);
  const [showProgress, setShowProgress] = React.useState(false);
  // const [respNeed, setResNeed] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('Unkown Error');
  // const [logoNeed, setLogoNeed] = React.useState(true);
  // const [logoSrc, setLogo] = React.useState();

  // const showAlert = () => {
  //   setShowAlert(true);
  // };
  const closeAlert = () => {
    setShowAlert(false);
  }
  const errorOccur = (error) => {
    setErrorMsg(error);
  }

  React.useEffect(() => {
    // if (logoNeed) {
    //   logo_request().then((result) => {
    //     if (result) {
    //       setLogoNeed(false);
    //       setLogo(result.logo);
    //     }
    //   });
    // }
    // if (respNeed) {
    //   dispatch({
    //     type: 'setUserInfo',
    //     fields: {
    //       ...userData,
    //       branch_name: userInfo.branch_name,
    //       company_info: respData.company_info
    //         ? respData.company_info
    //         : userInfo.company_info,
    //       template: respData.template ? respData.template : userInfo.template,
    //       survey: respData.survey ? respData.survey : userInfo.survey,
    //       languages: respData.languages
    //         ? respData.languages
    //         : userInfo.languages,
    //       header_color: respData.header_color
    //         ? respData.header_color
    //         : userInfo.header_color,
    //       footer_color: respData.footer_color
    //         ? respData.footer_color
    //         : userInfo.footer_color,
    //       background_color: respData.background_color
    //         ? respData.backgroundColor
    //         : userInfo.backgroundColor,
    //       questions: respData.questions
    //         ? respData.questions
    //         : userInfo.questions,
    //       ratings: respData.ratings ? respData.ratings : userInfo.ratings,
    //       brands: respData.brands ? respData.brands : userInfo.brands,
    //       message: respData.message ? respData.message : userInfo.message,
    //       token: rqstToken,
    //     },
    //   });
      console.log('--- we are here --');
      // setResNeed(false);
    // }
  }, []);

  // const buttonDisabled =
  //   !userID || userID.length < 2 || !password || password.length < 6;
  const _handleContinue = async () => {
    try {
      setShowProgress(true);
      const {
        data,
        // branch_name,
        // company_info,
        // template,
        // survey,
        // languages,
        // questions,
        // ratings,
        // header_color,
        // footer_color,
        // background_color,
        // brands,
        // message,
        token,
        errors,
      } = await login(userID, password);

      dispatch({
        type: 'setUserInfo',
        fields: {
          ...data,
      //     branch_name,
      //     company_info,
      //     template,
      //     languages,
      //     survey,
      //     header_color,
      //     footer_color,
      //     background_color,
      //     questions,
      //     ratings,
      //     brands,
      //     message,
          token,
        },
      });
      setShowProgress(false);
      if (token) {
        console.log('SignIn Succeed');
        navigation.navigate('Home');
        // agentId = data.id;
        // rqstToken = token;
        // self = setResNeed;
        // userData = data;
        // clearInterval(intervalNumber);
        // intervalNumber = setInterval(async () => {
        //   if (agentId != -1) {
        //     const {
        //       data,
        //       branch_name,
        //       company_info,
        //       template,
        //       survey,
        //       header_color,
        //       footer_color,
        //       background_color,
        //       languages,
        //       questions,
        //       ratings,
        //       brands,
        //       token,
        //       errors,
        //     } = await resend({ agent_id: agentId }, rqstToken);
        //     if (errors) {
        //       ToastAndroid.show(errors, ToastAndroid.SHORT);
        //     }
        //     respData = {
        //       company_info,
        //       template,
        //       survey,
        //       header_color,
        //       footer_color,
        //       background_color,
        //       languages,
        //       questions,
        //       ratings,
        //       brands,
        //       message,
        //     };
        //     // console.log(respData);
        //     self(true);
        //   }
        // }, 30000);
        // navigation.push('Branding');
      } else {
        setErrorMsg(errors);
        setShowAlert(true);
      }
    } finally {
      // console.log('received: ', userInfo);
    }
  };

  React.useEffect(() => {
    // return () => clearInterval(intervalNumber);
  });


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
            source={require('../Assets/Images/logo.png')}
          />
        </View>
        <Text style={[styles.title]}>Sign In</Text>
        <Text style={[styles.content]}>Hi there! Nice to see you again.</Text>
        <View style={[styles.inputContainer, {marginBottom: 0}]}>
          <Text style={[styles.label]}>Email</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={setUserID}
            placeholder="Your email address"
            autoCompleteType="email"
            value={userID}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 0}]}>
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
      <Overlay isVisible={showAlert} onBackdropPress={() => closeAlert()}>
        <Text style={{margin: 15}}>{errorMsg}</Text>
        <Button title='Close' onPress={() => closeAlert()} />
      </Overlay>
      <Overlay isVisible={showProgress} onBackdropPress={() => setShowProgress(false)}>
        <Spinner style={{margin: 15}}/>
      </Overlay>
    </SafeAreaView>
  );
};

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
export default SignIn;
