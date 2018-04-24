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
              31.1 €
            </Text>
          </ImageBackground>

          <Text style={{
            textAlign: 'center',
            fontFamily: 'open-sans-Regular',
            fontSize: 14
          }}>
            Kajaanintie 40 C 21/2
          </Text>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'open-sans-Regular',
            fontSize: 14
          }}>
            90130, Oulu
          </Text>

          
        </View>
      </View>


    );
  }
}
