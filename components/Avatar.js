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

import * as firebase from 'firebase';

export default class Avatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      photoUrl: require('../images/user/ava-user.png')
    };
  }

  componentWillMount() {
    let user = firebase.auth().currentUser;
      if (user != null) {
      this.setState({
        name : user.displayName,
        email : user.email
      });
    }
    console.log(user);
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
          <Image
            style={{width: screenWidth/5, height: (screenWidth * 164 / 164)/5, marginBottom: '2%'}}
            source={this.state.photoUrl}
          />
          <Text style={{
            textAlign: 'center',
            fontFamily: 'open-sans-Regular',
            fontSize: 14,
            marginBottom: '2%',
          }}>
            {this.state.name}
          </Text>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'open-sans-Bold',
            fontSize: 12,
            marginBottom: '2%',
          }}>
            {this.state.email}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
