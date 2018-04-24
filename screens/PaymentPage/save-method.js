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
} from 'react-native';

import Modal from "react-native-modalbox";

export default class SaveMethod extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <View>
        <View style={{
          marginTop: "5%",
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
          <ImageBackground
            style={{
              width: screenWidth,
              height: (screenWidth * 114 / 1080),
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: "5%",
            }}
            source={require('../../images/Basket/line.png')}
          >
            <Text style={{
              fontFamily: 'open-sans-Regular',
              fontSize: 20
            }}>
              {this.props.totalPrice} €
            </Text>
          </ImageBackground>

          <View style={{
              paddingLeft: '30%',
              paddingRight: '30%'
            }}>
            <Text style={{
              textAlign: 'center',
              fontFamily: 'open-sans-Regular',
              fontSize: 14
            }}>
              {this.props.newAddress}
            </Text>
          </View>

        </View>
      </View>


    );
  }
}
