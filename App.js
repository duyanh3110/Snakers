import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

// import { Font } from 'expo';

import { StackNavigator } from 'react-navigation';

import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <MenuNavigator />
      </View>
    );
  }
}

const MenuNavigator = StackNavigator({
  HomePage: { screen: HomePage },
  MenuPage: { screen: MenuPage },
}, {
  headerMode: 'none',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
