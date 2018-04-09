/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import BurgerMenuData from '../data/burgerMenuData';
import MenuItem from '../components/MenuItem';

export default class Burger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataItem: BurgerMenuData,     //change this when you want access another data
      heightBar: true,
      srcCover: '../images/burger/burger.png'
    };
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <MenuItem
          dataItem={this.state.dataItem}
          heightBar={this.state.heightBar}
          srcCover={this.state.srcCover}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
