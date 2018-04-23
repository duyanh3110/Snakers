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
import Avatar from '../components/Avatar';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../images/user/menu-top.png'),
      status: 'user',
      enabel: require('../images/menu/user-active.png')
    };
  }

  signOut = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      Actions.popTo('signin')
    }).catch(function(error) {
      // An error happened.
    });
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
          <Avatar />

          <TouchableOpacity onPress={() => Actions.editUser()}>
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
          <TouchableOpacity onPress={this.signOut}>
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
