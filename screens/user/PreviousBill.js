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
  ImageBackground,
} from 'react-native';

import OrderDetail from './OrderDetail';
import MenuBar1 from '../../components/MenuBar1';
import ListFoodHorizontal from '../ListFoodHorizontal';
import Avatar from '../../components/Avatar';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class PreviousBill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../../images/user/menu-top.png'),
      status: 'user',
      enabel: require('../../images/menu/user-active.png'),
      detail: false,
    };
  }

  ShowOrderView() {
    if(this.state.detail == false) {
      this.setState({detail: true});
    }
    else {
      this.setState({detail: false});
    }
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <MenuBar1
          srcCover={this.state.srcCover}
          iconEnable={this.state.enabel}
          iconStatus={this.state.status}
        />

        <ScrollView>
          <ImageBackground
            source={require('../../images/feedback/order-number-holder.png')}
            style={{
              width: screenWidth,
              height: screenWidth * 114 / 1080,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2%',
            }}
          >
            <Text style={{
              fontFamily: 'open-sans-Regular',
              fontSize: 18,
              color: 'black',
            }}>
                Order #5235967
            </Text>
          </ImageBackground>

          <ListFoodHorizontal/>

          <ImageBackground
            source={require('../../images/feedback/button-holder.png')}
            style={{
              width: screenWidth,
              height: screenWidth * 114 / 1080,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2%',
              marginTop: '5%',
            }}
          >
            <TouchableOpacity
              onPress={this.ShowOrderView.bind(this)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                style={{width: screenWidth/2.3, height: (screenWidth * 103 / 457)/2.3}}
                source={require('../../images/feedback/previous.png')}
              />
            </TouchableOpacity>
          </ImageBackground>

          <View>
            {
              this.state.detail ? <OrderDetail /> : null
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
