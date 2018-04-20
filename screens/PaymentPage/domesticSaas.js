/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';

import SaveMethod from './save-method';

export default class DomesticSaas extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
      }}>
        <Image
          style={{width: screenWidth/2, height: (screenWidth * 150 / 473)/2}}
          source={require('../../images/Basket/BankButton/saato.png')}
        />
        <SaveMethod />
      </View>
    );
  }
}
