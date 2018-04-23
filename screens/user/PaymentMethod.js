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

import MenuBar1 from '../../components/MenuBar1';
import Avatar from '../../components/Avatar';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class PaymentMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../../images/user/menu-top.png'),
      status: 'user',
      enabel: require('../../images/menu/user-active.png')
    };
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
