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
  TextInput,
} from 'react-native';

import MenuBar1 from '../components/MenuBar1';
import ListFoodHorizontal from './ListFoodHorizontal';

export default class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../images/feedback/feedback.png'),
    };
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <MenuBar1 srcCover={this.state.srcCover}/>

        <ScrollView>
          <ImageBackground
            source={require('../images/feedback/order-number-holder.png')}
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

          <View style={{
            marginTop: '10%',
            marginLeft: '2%',
            marginRight: '2%',
          }}>
            <Text style={{
              fontFamily: 'open-sans-Regular',
              fontSize: 14,
            }}>
              How was our delivering service quality ?
            </Text>
            <TextInput
              numberOfLines = {4}
              multiline={true}
              edittable={true}
              underlineColorAndroid='white'
              style={{
                borderWidth: 1,
                borderColor: '#765a5e',
                marginTop: '5%',
              }}
            />
          </View>

          <View style={{
            marginTop: '10%',
            marginLeft: '2%',
            marginRight: '2%',
          }}>
            <Text style={{
              fontFamily: 'open-sans-Regular',
              fontSize: 14,
            }}>
              How was our delivering service quality ?
            </Text>
            <TextInput
              numberOfLines = {4}
              multiline={true}
              edittable={true}
              underlineColorAndroid='white'
              style={{
                borderWidth: 1,
                borderColor: '#765a5e',
                marginTop: '5%',
              }}
            />
          </View>

          <View style={{
            marginTop: '10%',
            marginLeft: '2%',
            marginRight: '2%',
          }}>
            <Text style={{
              fontFamily: 'open-sans-Regular',
              fontSize: 14,
            }}>
              How was our delivering service quality ?
            </Text>
            <TextInput
              numberOfLines = {4}
              multiline={true}
              edittable={true}
              underlineColorAndroid='white'
              style={{
                borderWidth: 1,
                borderColor: '#765a5e',
                marginTop: '5%',
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              marginTop: '5%',
              marginBottom: '5%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{width: screenWidth/2.3, height: (screenWidth * 103 / 457)/2.3}}
              source={require('../images/feedback/submit.png')}
            />
          </TouchableOpacity>

          <ImageBackground
            source={require('../images/feedback/button-holder.png')}
            style={{
              width: screenWidth,
              height: screenWidth * 114 / 1080,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10%',
              marginTop: '5%',
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                style={{width: screenWidth/2.3, height: (screenWidth * 103 / 457)/2.3}}
                source={require('../images/feedback/previous.png')}
              />
            </TouchableOpacity>
          </ImageBackground>

        </ScrollView>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
