/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import pizzaMenuData from '../data/pizzaMenuData';
import MenuItem from '../components/MenuItem';

export default class Pizza extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataItem: pizzaMenuData,     //change this when you want access another data
      heightBar: true,
      srcCover: require('../images/burger/burger.png')    //change title cover here
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
