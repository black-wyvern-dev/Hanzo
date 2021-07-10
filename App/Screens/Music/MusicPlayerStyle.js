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
    flexDirection: 'row',
  },
  content: {
    color: '#888',
  },
  signOut: {
    color: '#F66',
  },
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    flex: 0.45,
    justifyContent: 'flex-start',
  },
  albumImage: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 40,
  },
  progressBar: {
    height: 20,
    paddingBottom: 90,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(74, 15, 15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textShadowColor: 'rgba(0,0,0,0.75)',
  },
  artist: {
    fontSize: 14,
    color: 'rgb(74, 15, 15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textShadowColor: 'rgba(0,0,0,0.75)',
  },
  playButton: {
    width: "60%",
    alignSelf: 'center'
  }
});

export default styles;