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
  ListView,
} from 'react-native';

import Modal from 'react-native-modalbox';

import { firebaseApp } from '../components/FirebaseConfig';

import MenuBar1 from '../components/MenuBar1';
import ListFoodHorizontal from './ListFoodHorizontal';

import ScreenOrder from './ScreenOrder';
console.disableYellowBox = true;
export default class Feedback extends Component {
  constructor(props) {
    super(props);

    this.itemRef = firebaseApp.database();

    this.state = {
      srcCover: require('../images/feedback/feedback.png'),
      status: 'feedback',
      enabel: require('../images/menu/feedback-active.png'),
      Delivery: '',
      Quality: '',
      Service: '',
    };
  }

  // Push feedback into Realtime Database
  FeedbackDB() {
    this.itemRef.ref('Feedback').push({
      Delivery: this.state.Delivery,
      Quality: this.state.Quality,
      Service: this.state.Service,
    });
    this.setState({
      Delivery: '',
      Quality: '',
      Service: '',
    })
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
              onChangeText={(Delivery) => this.setState({Delivery})}
              value={this.state.Delivery}
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
              onChangeText={(Quality) => this.setState({Quality})}
              value={this.state.Quality}
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
              onChangeText={(Service) => this.setState({Service})}
              value={this.state.Service}
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
            onPress={() => {this.FeedbackDB()}}
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
              marginBottom: '8%',
              marginTop: '5%',
            }}
          >
            <TouchableOpacity
              onPress={() => this.refs.modal2.open()}
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
          <View
            style={{
              marginBottom: '5%'
            }}
          >
            <Text
              style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 12,
                textAlign: 'center',
              }}
            >
            <Text style={{fontFamily: 'open-sans-Bold'}}>snackers.contact</Text>
              @gmail.com
            </Text>
            <Text
              style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 12,
                textAlign: 'center',
              }}
            >
              +358 0123 456
            </Text>
          </View>
        </ScrollView>

        <Modal
          style={{
            width: screenWidth - 50,
            height: 390,
            borderRadius: 20,
          }}
          ref={'modal2'}
          position={"center"}
          swipeArea={20}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <ScreenOrder />
          </ScrollView>
        </Modal>
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
