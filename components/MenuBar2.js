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

import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class MenuBar extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.coverImg}
            source={require('../images/home/cover.png')}/>
          <View style={styles.helloUser}>
            <Text style={styles.textUser}>Greeting, John</Text>
            <Text style={styles.textWelcome}>It's time for some tasty snacks!</Text>
          </View>
        </View>
        <View style={styles.menubar}>
          <TouchableOpacity onPress={() => Actions.menu()}>
            <Image
              style={styles.menuIcon}
              source={require('../images/home/menu.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.basket()}>
            <Image
              style={styles.menuIcon}
              source={require('../images/home/basket.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.user()}>
            <Image
              style={styles.menuIcon}
              source={require('../images/home/user.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.feedback()}>
            <Image
              style={styles.menuIcon}
              source={require('../images/home/feedback.png')}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.bestSell}>BEST SELLER</Text>
      </View>
    );
  }
}

let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImg: {
    width: width,
    height: width*623/1080
  },
  helloUser: {
    marginTop: -70,
    marginLeft: 20,
    marginBottom: 38
  },
  textUser: {
    marginBottom: 4,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'open-sans-Regular'
  },
  textWelcome: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'open-sans-Light'
  },
  menubar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menuIcon: {
    width: width/4,
    height: (width/4)*120/270
  },
  bestSell: {
    fontSize: 18,
    color: '#c9283e',
    fontFamily: 'open-sans-Bold',
    marginTop: 12,
    marginLeft: 20
  }
});
