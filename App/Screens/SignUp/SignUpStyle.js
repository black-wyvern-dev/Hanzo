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
    color: 'rgb(234, 164, 67)',
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
  signUpBtn: {
    backgroundColor: 'rgb(184, 114, 17)',
  },
  signUpActive: {
    backgroundColor: 'rgb(234, 164, 67)',
  },
  btnText: {
    color: '#4A0F0F',
    fontSize: 12,
    fontWeight: 'bold',
  },
  actionContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signUp: {
    color: 'rgb(234,164,67)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'rgba(0,0,0,0.75)',
  },
  checkContainer: {
    flexDirection: 'row',
    marginBottom: 35,
  },
  checkBox: {
    marginRight: 10,
    marginTop: 3,
    backgroundColor: 'rgb(234, 164, 67)',
    color: '#4A0F0F',
    height: 15,
    width: 15,
    fontSize: 14,
    textAlign: 'center',
    borderRadius: 3,
  },
  checkBoxActive: {
    color: 'rgb(234,164,67)',
  },
  checkTextContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link: {
    color: 'white',
  }
});

export default styles;