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
        <View style={{
          justifyContent: 'center',
        }}>
          <TextInput
            style={{height: 40, borderBottomColor: 'black', textAlign: 'center', fontFamily: 'open-sans-Regular', marginLeft: "17%", marginRight: "17%", fontSize: 12}}
            onChangeText={(text) => this.setState({text})}
            placeholder= "N A M E  O N  C A R D"
          />
          <TextInput
            style={{height: 40, borderBottomColor: 'black', textAlign: 'center', fontFamily: 'open-sans-Regular', marginLeft: "9%", marginRight: "9%", fontSize: 12}}
            onChangeText={(text) => this.setState({text})}
            placeholder= "C A R D  N U M B E R"
          />
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <TextInput
              style={{
                height: 40,
                width: "41%",
                borderBottomColor: 'black',
                textAlign: 'center',
                fontFamily: 'open-sans-Regular',
                fontSize: 12
              }}
              onChangeText={(text) => this.setState({text})}
              placeholder= "E X P I R Y  D A T E"
            />
            <TextInput
            style={{
              height: 40,
              width: "41%", 
              borderBottomColor: 'black',
              textAlign: 'center',
              fontFamily: 'open-sans-Regular',
              fontSize: 12
            }}
              onChangeText={(text) => this.setState({text})}
              placeholder= "S E C U R I T Y  C O D E"
            />
          </View>
        </View>

        <SaveMethod />
      </View>
    );
  }
}
