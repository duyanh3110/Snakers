import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Font } from 'expo';

import { firebaseApp } from './components/FirebaseConfig';

import Routes from './src/Routes';

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  async componentDidMount(){
    try {
      await Font.loadAsync({
        'open-sans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'open-sans-BoldItalic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
        'open-sans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
        'open-sans-ExtraBoldItalic': require('./assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
        'open-sans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
        'open-sans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
        'open-sans-LightItalic': require('./assets/fonts/OpenSans-LightItalic.ttf'),
        'open-sans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-Semibold': require('./assets/fonts/OpenSans-Semibold.ttf'),
        'open-sans-SemiboldItalic': require('./assets/fonts/OpenSans-SemiboldItalic.ttf'),
      });
    } catch (e) { console.log(e.message); }
    this.setState({ loaded: true });
  }

  render() {
    return this.state.loaded ? (
      <View style={styles.container}>
        <Routes />
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
