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
  },
  textName: {
    marginTop: 15,
    fontSize: 16,
    color: 'black',
  },
  textEmail: {
    fontSize: 12,
    color: 'gray',
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
  },
  textDrawerItem: {
    fontSize: 13,
    color: 'black',
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

export default styles;