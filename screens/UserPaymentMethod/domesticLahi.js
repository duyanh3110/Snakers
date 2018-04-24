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

export default class DomesticLahi extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
      }}>
        <Image
          style={{width: screenWidth/2.1, height: (screenWidth * 150 / 473)/2.1}}
          source={require('../../images/Basket/BankButton/lahi.png')}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: screenWidth/2.1,
              height: (screenWidth * 103 / 457)/2.1,
              marginTop: "5%",
              marginBottom: "10%",
            }}
            source={require('../../images/user/save-btn.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
