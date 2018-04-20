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
import MenuBar1 from '../components/MenuBar1';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../images/menu/menu-top.png'),
      status: 'menu',
      enabel: require('../images/menu/menu-active.png')
    };
  }
  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <MenuBar1
          srcCover={this.state.srcCover}
          iconEnable={this.state.enabel}
          iconStatus={this.state.status}
        />

        <ScrollView>
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
