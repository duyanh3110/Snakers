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

import MenuBar1 from '../../components/MenuBar1';
import Avatar from '../../components/Avatar';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import UserPaymentMethod from './UserPaymentMethod';

export default class PaymentMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../../images/user/menu-top.png'),
      status: 'user',
      enabel: require('../../images/menu/user-active.png'),
      email: "",
      change: false
    };
  }

  ShowUserPaymentMethodView() {
    if(this.state.change == false){
      this.setState({change: true});
    }
  }

  CloseUserPaymentMethodView() {
    if(this.state.change == true){
      this.setState({change: false});
    }
  }

  componentWillMount() {
    let user = firebase.auth().currentUser;
      if (user != null) {
      this.setState({
        email : user.email
      });
    }
    console.log(user);
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'white',
            zIndex: 1,
          }}
        >
          <MenuBar1
            srcCover={this.state.srcCover}
            iconEnable={this.state.enabel}
            iconStatus={this.state.status}
          />

          <ImageBackground
            source={require('../../images/Basket/saved-img.png')}
            style={{
              width: screenWidth,
              height: screenWidth * 412 / 1080,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingTop: "7%",
            }}
          >
            <View style={{
              width: "50%",
              height: "100%",
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <TouchableOpacity>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../../images/Basket/paypal.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{
              width: "50%",
              height: "100%",
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <Text
                style={{
                  fontFamily: 'open-sans-Bold',
                  fontSize: 10,
                  color: 'white',
                }}
              >
                {this.state.email.toUpperCase()}
              </Text>
            </View>

          </ImageBackground>

          <View
            style={{
              marginTop: '10%',
              marginBottom: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              onPress={this.ShowUserPaymentMethodView.bind(this)}
            >
              <Image
                style={{ width: screenWidth/2.1, height: (screenWidth*103/457)/2.1}}
                source={require('../../images/user/change-btn.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            {
              this.state.change ? <UserPaymentMethod /> : null
            }
          </View>

          <View
            style={{
              marginTop: '10%',
              marginBottom: '10%',
            }}
          >
            <TouchableOpacity
              onPress = {this.CloseUserPaymentMethodView.bind(this)}
            >
              <Image
                style={{ width: screenWidth, height: screenWidth*104/977}}
                source={require('../../images/user/cancel-btn.png')}
              />
            </TouchableOpacity>
          </View>

      </View>
    </ScrollView>
    );
  }
}
