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

export default class InternationCard extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <View>
        <View>
          <TextInput
            style={{height: 40, borderBottomColor: 'black', textAlign: 'center', fontFamily: 'open-sans-Regular', marginLeft: "17%", marginRight: "17%", fontSize: 12}}
            onChangeText={(text) => this.setState({text})}
            placeholder= "E M A I L"
          />
          <TextInput
            style={{height: 40, borderBottomColor: 'black', textAlign: 'center', fontFamily: 'open-sans-Regular', marginLeft: "17%", marginRight: "17%", fontSize: 12}}
            onChangeText={(text) => this.setState({text})}
            placeholder= "P A S S W O R D"
          />

          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <TouchableOpacity>
              <Image
                style={{
                  width: screenWidth/2,
                  height: (screenWidth * 103 / 457)/2,
                  marginTop: "5%",
                  marginBottom: "10%",
                  justifyContent: 'center',
                }}
                source={require('../../images/Basket/sign-in-btn.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <SaveMethod
          totalPrice={this.props.raichuPrice}
          newAddress={this.props.raichuAddress}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: screenWidth/2,
              height: (screenWidth * 103 / 457)/2,
              marginTop: "5%",
              marginBottom: "10%",
            }}
            source={require('../../images/Basket/place-order.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
