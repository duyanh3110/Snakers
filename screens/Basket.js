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
  FlatList,
  TextInput,
} from 'react-native';

import MenuBar1 from '../components/MenuBar1';
import CartData from '../data/cartData';
import Payment from './Payment';

import BasketFlatListItem from './BasketFlatListItem';

export default class Basket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../images/Basket/basket.png'),
      status: 'basket',
      enabel: require('../images/menu/cart-active.png'),
      currentCart: CartData,
      totalPrice: 0,
      payment: false,
      basket: false,
      address: false,
      newAddress: 'Kajaanintie 40 C 21/2 90130, Oulu'
    };
  }

  ShowPaymentView() {
    if(this.state.payment == false){
      this.setState({payment: true});
      this.setState({basket: false});
    }
    else {
      this.setState({payment: false});
    }
  }

  ShowNewAddress() {
    if(this.state.address == false) {
      this.setState({address: true});
    }
    else {
      this.setState({address: false});
    }
  }

  componentWillMount() {
    for (var i = 0; i < CartData.length; i++) {
      let itemTotalPrice = 0;
      itemTotalPrice = CartData[i].price*CartData[i].amount;
      //console.log(itemTotalPrice);
      this.state.totalPrice += itemTotalPrice;
    }
  }

  addressChangedHandler = val => {
    this.setState({
      newAddress: val
    });
  }

  changeSubmitHandler = () => {
    if (this.state.newAddress.trim() === "") {
      return;
    }
    console.log(this.state.newAddress);
  }

  removeItemHandler = key => {
    CartData.find(item => {
      if (item.key === key) {
        let itemPosition = CartData.indexOf(item);
        CartData.splice(itemPosition, 1);
        this.setState({
          currentCart: CartData
        });
        console.log(this.state.currentCart.length);
      }
    });
  }

  calculateTotalPrice = price => {
    let newPrice = this.state.totalPrice + price;
    this.setState({
      totalPrice: newPrice
    });
  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <View style={styles.container}>
        <ScrollView>
          <MenuBar1
            srcCover={this.state.srcCover}
            iconEnable={this.state.enabel}
            iconStatus={this.state.status}
          />

          <View
            style={{
              backgroundColor: 'white',
            }}
          >
            {
              this.state.currentCart.length > 0?
              <FlatList
                data={this.state.currentCart}
                renderItem={({item, index}) => {
                  return(
                    <BasketFlatListItem
                      item={item}
                      index={index}
                      removeItem={this.removeItemHandler}
                      callBackPrice={this.calculateTotalPrice}
                    />
                  );
                }}
              />

            : <Image
              style={{
                width:screenWidth,
                height:screenWidth*332/1080,
                marginBottom: 15,
              }}
              source={require('../images/Basket/empty-basket.png')}/>
            }

          </View>

          <View
            style={{
              marginLeft: '2%',
              marginRight: '2%',
              flexDirection: 'row',
            }}
            >
              <View
                style={{
                  width: '46%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  marginRight: '2%',
                  paddingRight: '5%',
                  paddingLeft: '5%',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'open-sans-Bold',
                    fontSize: 10,
                  }}
                >
                  SAVED ADDRESS
                </Text>


                <Text
                  style={{
                    fontFamily: 'open-sans-Regular',
                    fontSize: 12,
                    textAlign: 'center',
                  }}
                >
                  {this.state.newAddress}
                </Text>

              </View>

              <TouchableOpacity
                onPress={this.ShowNewAddress.bind(this)}
              >
                <ImageBackground
                  source={require('../images/Basket/new-address-1.png')}
                  style={{
                    width: screenWidth/2,
                    height: (screenWidth * 220 / 484)/2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{
                    color: 'white',
                    fontFamily: 'open-sans-Bold',
                    fontSize: 10,
                  }}>
                    NEW ADDRESS
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View>
              {
                this.state.address ?

                  <View style={{
                    margin: '2%',
                    justifyContent: 'center',
                  }}>
                    <ImageBackground
                      source={require('../images/Basket/new-address-2.png')}
                      style={{
                        width: '100%',
                        height: 120,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <View style={{
                        flexDirection: 'column',
                        width: '50%',
                        paddingLeft: '2%',
                      }}>
                        <TextInput
                          underlineColorAndroid='transparent'
                          placeholder='Name'
                          placeholderTextColor='#999999'
                          style={{
                            fontFamily: 'open-sans-Regular',
                            width: '95%',
                            marginRight: '2%',
                            marginBottom: '5%',
                            borderBottomWidth: 1,
                            borderColor: 'white',
                            color: 'white'
                          }}
                        />
                        <TextInput
                          underlineColorAndroid='transparent'
                          placeholder='Phone number'
                          placeholderTextColor='#999999'
                          style={{
                            fontFamily: 'open-sans-Regular',
                            width: '95%',
                            marginRight: '2%',
                            marginBottom: '5%',
                            borderBottomWidth: 1,
                            borderColor: 'white',
                            color: 'white'
                          }}
                        />
                        <TextInput
                          onChangeText={this.addressChangedHandler}
                          underlineColorAndroid='transparent'
                          placeholder='Address'
                          placeholderTextColor='#999999'
                          style={{
                            fontFamily: 'open-sans-Regular',
                            width: '95%',
                            marginRight: '2%',
                            marginBottom: '5%',
                            borderBottomWidth: 1,
                            borderColor: 'white',
                            color: 'white'
                          }}
                        />
                      </View>

                      <View
                        style={{
                          width: '50%',
                          justifyContent: 'center',
                        }}
                      >
                        <TouchableOpacity
                          onPress={this.changeSubmitHandler}
                          style={{
                            backgroundColor: 'white',
                            padding: 10,
                            width: '80%',
                            marginLeft: '10%',
                            marginRight: '10%',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Text style={{
                            color: 'black',
                            fontSize: 10,
                            fontFamily: 'open-sans-Bold',
                          }}>
                            CONFIRM ADDRESS
                          </Text>
                        </TouchableOpacity>
                      </View>


                    </ImageBackground>
                  </View>

                 : null
              }
            </View>

            <ImageBackground
              style={{
                width: screenWidth,
                height: (screenWidth * 114 / 1080),
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: "2%",
                marginTop: '5%',
              }}
              source={require('../images/Basket/line.png')}
            >
              <Text style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 20
              }}>
                {this.state.totalPrice} €
              </Text>
            </ImageBackground>

            {
              this.state.currentCart.length > 0?
              <TouchableOpacity
                onPress={this.ShowPaymentView.bind(this)}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
              >
                <Image
                  style={{width: screenWidth/3, height: (screenWidth * 244 / 462)/3}}
                  source={require('../images/Basket/payment-button.png')}
                />
              </TouchableOpacity>
              :null
            }

            <View>
              {
                this.state.payment ?
                <Payment
                  pikachuPrice={this.state.totalPrice}
                  pikachuAddress={this.state.newAddress}
                /> : null
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
    backgroundColor: 'white',
  },
});
