/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Menu extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <Image
          style={{width: screenWidth, height: screenWidth * 376 / 1080}}
          source={require('../images/menu/cover.png')}
        />

        <View style={{
          flexDirection: 'row',
          marginTop: -40,
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={require('../images/menu/menu.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Basket')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={require('../images/menu/cart-active.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('User')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={require('../images/menu/user.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={require('../images/menu/feedback.png')}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <Image
            style={{width: screenWidth, height: screenWidth * 176 / 1080}}
            source={require('../images/menu/menu-top.png')}
          />

          <TouchableOpacity onPress={() => Actions.burger()}>
            <Image
              style={{width: screenWidth, height: screenWidth * 412 / 1080}}
              source={require('../images/menu/burger.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.pizza()}>
            <Image
              style={{width: screenWidth, height: screenWidth * 412 / 1080}}
              source={require('../images/menu/pizza.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.dessert()}>
            <Image
              style={{width: screenWidth, height: screenWidth * 412 / 1080}}
              source={require('../images/menu/dessert.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.drink()}>
            <Image
              style={{width: screenWidth, height: screenWidth * 412 / 1080}}
              source={require('../images/menu/drink.png')}
            />
          </TouchableOpacity>
        </ScrollView>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
