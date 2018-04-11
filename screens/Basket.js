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

import MenuBar1 from '../components/MenuBar1';

export default class ClassName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../images/Basket/basket.png')
    };
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <MenuBar1 srcCover={this.state.srcCover}/>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
