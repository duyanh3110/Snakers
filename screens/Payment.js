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

import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import SaveMethod from './PaymentPage/save-method';
import InternationCard from './PaymentPage/international-card';
import DomesticLahi from './PaymentPage/domesticLahi';
import DomesticOP from './PaymentPage/domesticOP';
import DomesticNodr from './PaymentPage/domesticNodr';
import DomesticSaas from './PaymentPage/domesticSaas';
import Paypal from './PaymentPage/paypal';
import Basket from './Basket';

import Modal from "react-native-modalbox";

import MenuBar1 from '../components/MenuBar1';

export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedmethod: false,
      international: false,
      domesticLahi: false,
      domesticOP: false,
      domesticNodr: false,
      domesticSaas: false,
      paypal: false,
      email: '',
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

  componentWillMount() {
    let user = firebase.auth().currentUser;
      if (user != null) {
      this.setState({
        email : user.email
      });
    }
    console.log(user);
  }

  render() {
    let screenWidth = Dimensions.get('window').width;


    return (
      <View style={styles.container}>

        <Image
          style={{width: screenWidth, height: screenWidth * 176 / 1080}}
          source={require('../images/Basket/payment.png')}
        />

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
                {this.state.email.toUpperCase()}
              </Text>
            </View>

          </ImageBackground>

          <View>
            {
              this.state.savedmethod ?
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SaveMethod
                  totalPrice={this.props.pikachuPrice}
                  newAddress={this.props.pikachuAddress}
                />
                <TouchableOpacity onPress={() => this.refs.modal3.open()}>
                  <Image
                    style={{
                      width: screenWidth/2,
                      height: (screenWidth * 103 / 457)/2,
                      marginTop: "5%",
                      marginBottom: "10%",
                    }}
                    source={require('../images/Basket/place-order.png')}
                  />
                </TouchableOpacity>
              </View> : null
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
              this.state.international ?
              <InternationCard
                raichuPrice={this.props.pikachuPrice}
                raichuAddress={this.props.pikachuAddress}
              /> : null
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
              this.state.domesticLahi ?
              <DomesticLahi
                raichuPrice={this.props.pikachuPrice}
                raichuAddress={this.props.pikachuAddress}
              /> : null
            }
          </View>

          <View>
            {
              this.state.domesticOP ?
              <DomesticOP
                raichuPrice={this.props.pikachuPrice}
                raichuAddress={this.props.pikachuAddress}
              /> : null
            }
          </View>

          <View>
            {
              this.state.domesticNodr?
              <DomesticNodr
                raichuPrice={this.props.pikachuPrice}
                raichuAddress={this.props.pikachuAddress}
              /> : null
            }
          </View>

          <View>
            {
              this.state.domesticSaas ?
              <DomesticSaas
                raichuPrice={this.props.pikachuPrice}
                raichuAddress={this.props.pikachuAddress}
              /> : null
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
              this.state.paypal ?
              <Paypal
                raichuPrice={this.props.pikachuPrice}
                raichuAddress={this.props.pikachuAddress}
              /> : null
            }
          </View>
        </ScrollView>


        <Modal
          style={{
            width: screenWidth - 50,
            height: 250,
            borderRadius: 20,
            paddingTop: '10%',
            alignItems: 'center',
          }}
          ref={'modal3'}
          position={"center"}
          entry={"top"}
          swipeArea={21}
        >
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={require('../images/Basket/done-tick.png')}
          />

          <View style={{
            marginTop: '10%',
          }}>
            <Text style={{
              fontFamily: 'open-sans-Regular',
              fontSize: 14,
            }}>
              Order Successfully Placed
            </Text>
          </View>

          <TouchableOpacity onPress={() => {
              this.refs.modal3.close();
              Actions.home()
            }}>
            <Image
              style={{
                width: screenWidth/2,
                height: (screenWidth * 103/457)/2,
                marginTop: '10%',
              }}
              source={require('../images/Basket/done-btn.png')}
            />

          </TouchableOpacity>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
});
