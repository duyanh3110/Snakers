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
} from 'react-native';

import MenuBar1 from '../components/MenuBar1';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../images/user/menu-top.png')
    };
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <MenuBar1 srcCover={this.state.srcCover}/>

        <ScrollView>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
            <Image
              style={{width: screenWidth/5, height: (screenWidth * 164 / 164)/5, marginBottom: '2%'}}
              source={require('../images/user/ava-user.png')}
            />
            <Text style={{
              textAlign: 'center',
              fontFamily: 'open-sans-Regular',
              fontSize: 14,
              marginBottom: '2%',
            }}>
              Minh Anh
            </Text>
            <Text style={{
              textAlign: 'center',
              fontFamily: 'open-sans-Bold',
              fontSize: 12,
              marginBottom: '2%',
            }}>
              MINHANH.VD31@GMAIL.COM
            </Text>
          </View>

          <TouchableOpacity>
            <Image
              style={{width: screenWidth, height: screenWidth * 413 / 1080}}
              source={require('../images/user/edit-profile.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: screenWidth, height: screenWidth * 413 / 1080}}
              source={require('../images/user/payment-method.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: screenWidth, height: screenWidth * 413 / 1080}}
              source={require('../images/user/history.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: screenWidth, height: screenWidth * 413 / 1080}}
              source={require('../images/user/signout.png')}
            />
          </TouchableOpacity>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
