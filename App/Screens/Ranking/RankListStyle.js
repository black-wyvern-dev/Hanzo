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

  row: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#d6d7da"
  },
  left: {
    flexDirection: "row",
    alignItems: "center"
  },
  rank: {
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 5,
    width: 25,
    textAlign: 'center'
  },
  singleDidget: {
    paddingLeft: 16,
    paddingRight: 6
  },
  doubleDidget: {
    paddingLeft: 10,
    paddingRight: 2
  },
  label: {
    fontSize: 17,
    flex: 1,
    paddingRight: 80
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    right: 15,
    paddingLeft: 15
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 10
  }
});

export default styles;