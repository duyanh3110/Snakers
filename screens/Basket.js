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

import OriginalMenuBar from '../components/OriginalMenuBar';

export default class ClassName extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <OriginalMenuBar />
        <Image
          style={{width: screenWidth, height: screenWidth * 176 / 1080}}
          source={require('../images/Basket/basket.png')}
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
