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
  inputContainer: {
    marginBottom: 15,
  },
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
    marginBottom: -10,
  },
  textName: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Moyko',
    color: 'rgb(234, 164, 67)',
  },
  // textEmail: {
  //   fontSize: 12,
  //   color: 'gray',
  // },
  containerContent: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  divider: {
    height: 1,
    flex: 1,
    backgroundColor: 'rgb(234, 164, 67)',
    marginVertical: 25,
  },
  textDrawer: {
    marginTop: 0,
    marginLeft: -5,
    borderRadius: 0,
    paddingLeft: 5,
    width: '105%',
    height: '100%',
  },
  textDrawerItem: {
    fontSize: 13,
    color: 'rgb(234, 164, 67)',
    marginLeft: -20,
  },
  drawerIcon: {
    color: 'rgb(234, 164, 67)',
    fontSize: 20,
  },
  drawerSuffixIcon: {
    color: 'rgb(234, 164, 67)',
    fontSize: 16,
    position: 'absolute',
    right: 20,
    top: 14,
  },
  drawerCloseIcon: {
    fontSize: 22,
    color: 'rgb(234, 164, 67)',
    position: 'absolute',
    top: 15,
    left: 15,
  },
});

export default styles;