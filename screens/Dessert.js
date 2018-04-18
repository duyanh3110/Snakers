/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import dessertMenuData from '../data/dessertMenuData';
import MenuItem from '../components/MenuItem';

export default class Dessert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataItem: dessertMenuData,     //change this when you want access another data
      heightBar: true,
      srcCover: require('../images/burger/dessert.png')    //change title cover here
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
