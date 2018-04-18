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
import DomesticLahi from './PaymentPage/domesticLahi';
import DomesticOP from './PaymentPage/domesticOP';
import DomesticNodr from './PaymentPage/domesticNodr';
import DomesticSaas from './PaymentPage/domesticSaas';
import Paypal from './PaymentPage/paypal';

import MenuBar1 from '../components/MenuBar1';

export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../images/Basket/payment.png'),
      savedmethod: false,
      international: false,
      domesticLahi: false,
      domesticOP: false,
      domesticNodr: false,
      domesticSaas: false,
      paypal: false,
    };
  }

  ShowSavedMethodView() {
    if(this.state.savedmethod == false){
      this.setState({savedmethod: true});
      this.setState({international: false});
      this.setState({domesticLahi: false});
      this.setState({domesticOP: false});
      this.setState({domesticNodr: false});
      this.setState({domesticSaas: false});
    }
    else {
      this.setState({savedmethod: false});
    }
  }

  ShowInternationalCardView() {
    if(this.state.international == false){
      this.setState({international: true});
      this.setState({savedmethod: false});
      this.setState({domesticLahi: false});
      this.setState({domesticOP: false});
      this.setState({domesticNodr: false});
      this.setState({domesticSaas: false});
    }
    else {
      this.setState({international: false});
    }
  }

  ShowDomesticLahiView() {
    if(this.state.domesticLahi == false){
      this.setState({domesticLahi: true});
      this.setState({savedmethod: false});
      this.setState({international: false});
      this.setState({domesticOP: false});
      this.setState({domesticNodr: false});
      this.setState({domesticSaas: false});
    }
    else {
      this.setState({domesticLahi: false});
    }
  }

  ShowDomesticOPView() {
    if(this.state.domesticOP == false){
      this.setState({domesticOP: true});
      this.setState({savedmethod: false});
      this.setState({international: false});
      this.setState({domesticLahi: false});
      this.setState({domesticNodr: false});
      this.setState({domesticSaas: false});
    }
    else {
      this.setState({domesticOP: false});
    }
  }

  ShowDomesticNodrView() {
    if(this.state.domesticNodr == false){
      this.setState({domesticNodr: true});
      this.setState({savedmethod: false});
      this.setState({international: false});
      this.setState({domesticLahi: false});
      this.setState({domesticOP: false});
      this.setState({domesticSaas: false});
    }
    else {
      this.setState({domesticNodr: false});
    }
  }

  ShowDomesticSaasView() {
    if(this.state.domesticSaas == false){
      this.setState({domesticSaas: true});
      this.setState({savedmethod: false});
      this.setState({international: false});
      this.setState({domesticLahi: false});
      this.setState({domesticOP: false});
      this.setState({domesticNodr: false});
    }
    else {
      this.setState({domesticSaas: false});
    }
  }

  ShowPaypalView() {
    if(this.state.paypal == false){
      this.setState({paypal: true});
      this.setState({savedmethod: false});
      this.setState({international: false});
      this.setState({domesticLahi: false});
      this.setState({domesticOP: false});
      this.setState({domesticNodr: false});
      this.setState({domesticSaas: false});
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
              <TouchableOpacity onPress={this.ShowDomesticLahiView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/Lahitapiola.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.ShowDomesticOPView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/op.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.ShowDomesticNodrView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/nordea.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.ShowDomesticSaasView.bind(this)}>
                <Image
                  style={{width: screenWidth/6, height: (screenWidth * 192 / 192)/6}}
                  source={require('../images/Basket/saato.png')}
                />
              </TouchableOpacity>

            </View>

          </ImageBackground>

          <View>
            {
              this.state.domesticLahi ? <DomesticLahi /> : null
            }
          </View>

          <View>
            {
              this.state.domesticOP ? <DomesticOP /> : null
            }
          </View>

          <View>
            {
              this.state.domesticNodr? <DomesticNodr /> : null
            }
          </View>

          <View>
            {
              this.state.domesticSaas ? <DomesticSaas /> : null
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
