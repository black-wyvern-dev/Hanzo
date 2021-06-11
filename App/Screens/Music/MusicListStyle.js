import * as React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    // marginTop: 50,
  },
  inputContainer: {
    // marginBottom: 15,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#dee2eb'
  },
  row: {
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flexShrink: 1,
    color: '#888',
  },
  header: {
    flexDirection: 'row'
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000'
  },
  contentText: {
    color: '#949494',
    fontSize: 16,
    marginTop: 2
  },
  signOut: {
    color: '#F66',
  },
});

export default styles;