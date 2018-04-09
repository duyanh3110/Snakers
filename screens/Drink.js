/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import drinkMenuData from '../data/drinkMenuData';
import MenuItem from '../components/MenuItem';

export default class Drink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataItem: drinkMenuData,     //change this when you want access another data
      heightBar: true,
      srcCover: require('../images/burger/burger.png')
    };
  }

  render() {
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
