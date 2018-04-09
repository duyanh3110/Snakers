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

import BurgerMenuData from '../data/burgerMenuData';
import MenuItem from '../components/MenuItem';

export default class ClassName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataItem: BurgerMenuData,     //change this when you want access another data
      heightBar: true
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <MenuItem
          dataItem={this.state.dataItem}
          heightBar={this.state.heightBar}
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
