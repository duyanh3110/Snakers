import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

let {height, width} = Dimensions.get('window');

export default class HomePage extends Component {
  menu = () => {
    Actions.menu()
  };

  render() {
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
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../images/home/menu.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../images/home/basket.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../images/home/user.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../images/home/feedback.png')}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.bestSell}>BEST SELLER</Text>
        <Button
          onPress={this.menu}
          title ="Go to Menu Page"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column'
  },
  coverImg: {
    width: width,
    height: width*623/1080
  },
  helloUser: {
    marginTop: -70,
    marginLeft: 20,
    marginBottom: 42
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
    marginTop: 16,
    marginLeft: 20
  }
});
