import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

// import { Font } from 'expo';

import { StackNavigator } from 'react-navigation';

import Menu from '../screens/Menu';
import Basket from '../screens/Basket';
import User from '../screens/User';
import Feedback from '../screens/Feedback';
import Burger from '../screens/Burger';
import Pizza from '../screens/Pizza';
import Dessert from '../screens/Dessert';
import Drink from '../screens/Drink';

export default class MenuPage extends React.Component {
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
  Menu: { screen:  Menu },
  Basket: { screen: Basket },
  User: { screen: User },
  Feedback: { screen: Feedback },
  Burger: { screen: Burger },
  Pizza: { screen: Pizza },
  Dessert: { screen: Dessert },
  Drink: { screen: Drink }
}, {
  headerMode: 'none',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
