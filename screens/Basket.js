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

import SaveMethod from './PaymentPage/save-method';
import InternationCard from './PaymentPage/international-card';
import Domestic from './PaymentPage/domestic';
import Paypal from './PaymentPage/paypal';

import MenuBar1 from '../components/MenuBar1';

export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../images/Basket/payment.png'),
      savedmethod: false,
      international: false,
      domestic: false,
      paypal: false,
    };
  }

  ShowSavedMethodView() {
    if(this.state.savedmethod == false){
      this.setState({savedmethod: true});
      this.setState({international: false});
      this.setState({domestic: false});
    }
    else {
      this.setState({savedmethod: false});
    }
  }

  ShowInternationalCardView() {
    if(this.state.international == false){
      this.setState({international: true});
      this.setState({savedmethod: false});
      this.setState({domestic: false});
    }
    else {
      this.setState({international: false});
    }
  }

  ShowDomesticView() {
    if(this.state.domestic == false){
      this.setState({domestic: true});
      this.setState({savedmethod: false});
      this.setState({international: false});
    }
    else {
      this.setState({domestic: false});
    }
  }

  ShowPaypalView() {
    if(this.state.paypal == false){
      this.setState({paypal: true});
      this.setState({savedmethod: false});
      this.setState({international: false});
      this.setState({domestic: false});
    }
    else {
      this.setState({paypal: false});
    }
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <MenuBar1 srcCover={this.state.srcCover}/>

        <ScrollView>
          <ImageBackground
            source={require('../images/Basket/saved-img.png')}
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
              <TouchableOpacity onPress={this.ShowSavedMethodView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/paypal.png')}
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
                MINHANH.VD31@GMAIL.COM
              </Text>
            </View>

          </ImageBackground>

          <View>
            {
              this.state.savedmethod ? <SaveMethod /> : null
            }
          </View>

          <ImageBackground
            source={require('../images/Basket/visa-master.png')}
            style={{
              width: screenWidth,
              height: screenWidth * 412 / 1080,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={{
                width: "65%",
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: '7%'
            }}
            >
              <TouchableOpacity onPress={this.ShowInternationalCardView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/visa.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.ShowInternationalCardView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/master.png')}
                />
              </TouchableOpacity>
            </View>

          </ImageBackground>

          <View>
            {
              this.state.international ? <InternationCard /> : null
            }
          </View>

          <ImageBackground
            source={require('../images/Basket/domestic.png')}
            style={{
              width: screenWidth,
              height: screenWidth * 412 / 1080,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: screenWidth,
              marginTop: "7%",
            }}
            >
              <TouchableOpacity onPress={this.ShowDomesticView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/Lahitapiola.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.ShowDomesticView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/op.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.ShowDomesticView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/nordea.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.ShowDomesticView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/saato.png')}
                />
              </TouchableOpacity>

            </View>

          </ImageBackground>

          <View>
            {
              this.state.domestic ? <Domestic /> : null
            }
          </View>

          <ImageBackground
            source={require('../images/Basket/paypal-cover.png')}
            style={{
              width: screenWidth,
              height: screenWidth * 412 / 1080,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity onPress={this.ShowPaypalView.bind(this)}>
              <Image
                style={{
                  width: screenWidth/6,
                  height: (screenWidth * 192 / 192)/6,
                  marginTop: "7%",
                }}
                source={require('../images/Basket/paypal.png')}
              />
            </TouchableOpacity>

          </ImageBackground>

          <View>
            {
              this.state.paypal ? <Paypal /> : null
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
    backgroundColor: 'white'
  },
});
