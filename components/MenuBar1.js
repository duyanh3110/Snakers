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
    return (
      <View>
        <Image
          style={{width: screenWidth, height: screenWidth * 376 / 1080}}
          source={require('../images/menu/cover.png')}
        />

        <View style={{
          flexDirection: 'row',
          marginTop: -40,
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={require('../images/menu/menu.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Basket')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={require('../images/menu/cart-active.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('User')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={require('../images/menu/user.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={require('../images/menu/feedback.png')}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={{width: screenWidth, height: screenWidth * 176 / 1080}}
          source={this.props.srcCover}
        />
      </View>
    );
  }
}
