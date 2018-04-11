import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

let screenWidth = Dimensions.get('window').width;

export default class MenuBar1 extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let srcCover =   this.state.srcCover;
    if (srcCover) {
      console.log('Test: ', this.state.srcCover)
      return (
        <View>
          <Image
            style={{width: screenWidth, height: screenWidth * 203 / 1080}}
            source={require('../images/menu/cover.png')}
          />

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
              <Image
                style={{width: screenWidth/4, height: (screenWidth * 103 / 270)/4}}
                source={require('../images/menu/menu.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Basket')}>
              <Image
                style={{width: screenWidth/4, height: (screenWidth * 103 / 270)/4}}
                source={require('../images/menu/basket.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('User')}>
              <Image
                style={{width: screenWidth/4, height: (screenWidth * 103 / 270)/4}}
                source={require('../images/menu/user.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
              <Image
                style={{width: screenWidth/4, height: (screenWidth * 103 / 270)/4}}
                source={require('../images/menu/feedback.png')}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={{width: screenWidth, height: screenWidth * 176 / 1080}}
            source={require('../images/burger/burger.png')}
          />
        </View>
        <Image
          style={{width: screenWidth, height: screenWidth * 176 / 1080}}
          source={this.props.srcCover}
        />
      </View>
    );
  }
}
