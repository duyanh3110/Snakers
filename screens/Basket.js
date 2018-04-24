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
                  }}
                >
                  Kajaanintie 40 C 21/2
                </Text>

                <Text
                  style={{
                    fontFamily: 'open-sans-Regular',
                    fontSize: 12,
                  }}
                >
                  90130, Oulu
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
                          }}
                        />
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
                          }}
                        />
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

            <View>
              {
                this.state.payment ? <Payment /> : null
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
