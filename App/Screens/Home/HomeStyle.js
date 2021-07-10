import * as React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  content: {
    color: '#888',
  },
  signOut: {
    color: '#F66',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#EAA443',
    paddingBottom: 1,
    marginBottom: 10,
    color: 'rgb(74, 15, 15)',
  },
  listContainer: {
    flex: 1,
    // backgroundColor: '#dee2eb'
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500'
  },
  row: {
    paddingRight: 10,
    paddingLeft: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flexShrink: 1
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
  }
})

export default styles;