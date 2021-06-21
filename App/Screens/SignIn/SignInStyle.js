import * as React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  mainContainer: {
    width: '70%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: -20,
    alignSelf: 'center',
  },
  logoTitle: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Moyko',
    color: 'rgb(234,164,67)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'rgba(0,0,0,0.75)',
    margin: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: 'rgb(234,164,67)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'rgba(0,0,0,0.75)',
  },
  content: {
    color: 'rgb(234,164,67)',
  },
  inputContainer: {
    marginVertical: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(234,164,67)',
    color: 'rgb(234,164,67)',
    paddingBottom: 1,
    marginBottom: 10,
  },
  label: {
    color: 'rgb(234,164,67)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'rgba(0,0,0,0.75)',
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
    backgroundColor: 'rgb(234,164,67)',
  },
  btnIcon: {
    backgroundColor: 'transparent',
    marginRight: 10,
    width: 20,
  },
  btnText: {
    color: '#4A0F0F',
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
    color: 'rgb(234,164,67)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
    textShadowColor: '#4A0F0F',
  },
});

export default styles;