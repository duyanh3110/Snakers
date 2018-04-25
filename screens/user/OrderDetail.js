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

import { Actions } from 'react-native-router-flux';

export default class OrderDetail extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <View>
        <ImageBackground
          source={require('../../images/feedback/order-number-holder.png')}
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

        <View
          style={{
            flexDirection: 'row',
            marginBottom: '2%',
            paddingLeft: '2%',
            paddingRight: '2%',
            justifyContent: 'space-around',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{
                width: screenWidth/5,
                height: (screenWidth * 412 /412)/5,
              }}
              source={require('../../images/user/food1.png')}
            />
          </View>

          <View
            style={{
              width: '40%',
              borderTopWidth: 2,
              borderBottomWidth: 2,
              paddingLeft: '2%',
              paddingRight: '2%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'open-sans-Bold',
                fontSize: 10,
              }}
            >
              BACON BURGER ON BRIOCHE BUNS
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            >
              <ImageBackground
                source={require('../../images/Basket/quantity.png')}
                style={{
                  width: screenWidth*0.34,
                  height: (screenWidth * 101 / 348)*0.34,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'open-sans-Regular',
                    fontSize: 18,
                  }}
                >
                  1
                </Text>
              </ImageBackground>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                  marginTop: '2%',
                  borderWidth: 2,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'open-sans-Regular',
                    fontSize: 18,
                  }}
                >
                  6.5 €
                </Text>
              </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginBottom: '2%',
            paddingLeft: '2%',
            paddingRight: '2%',
            justifyContent: 'space-around',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{
                width: screenWidth/5,
                height: (screenWidth * 412 /412)/5,
              }}
              source={require('../../images/user/food2.png')}
            />
          </View>

          <View
            style={{
              width: '40%',
              borderTopWidth: 2,
              borderBottomWidth: 2,
              marginLeft: '1%',
              marginRight: '1%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'open-sans-Bold',
                fontSize: 10,
              }}
            >
              BURGER
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            >
              <ImageBackground
                source={require('../../images/Basket/quantity.png')}
                style={{
                  width: screenWidth*0.34,
                  height: (screenWidth * 101 / 348)*0.34,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'open-sans-Regular',
                    fontSize: 18,
                  }}
                >
                  2
                </Text>
              </ImageBackground>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                  marginTop: '2%',
                  borderWidth: 2,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'open-sans-Regular',
                    fontSize: 18,
                  }}
                >
                  13 €
                </Text>
              </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginBottom: '2%',
            paddingLeft: '2%',
            paddingRight: '2%',
            justifyContent: 'space-around',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{
                width: screenWidth/5,
                height: (screenWidth * 412 /412)/5,
              }}
              source={require('../../images/user/food3.png')}
            />
          </View>

          <View
            style={{
              width: '40%',
              borderTopWidth: 2,
              borderBottomWidth: 2,
              marginLeft: '1%',
              marginRight: '1%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'open-sans-Bold',
                fontSize: 10,
              }}
            >
              SALAD
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            >
              <ImageBackground
                source={require('../../images/Basket/quantity.png')}
                style={{
                  width: screenWidth*0.34,
                  height: (screenWidth * 101 / 348)*0.34,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'open-sans-Regular',
                    fontSize: 18,
                  }}
                >
                  4
                </Text>
              </ImageBackground>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                  marginTop: '2%',
                  borderWidth: 2,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'open-sans-Regular',
                    fontSize: 18,
                  }}
                >
                  11.6 €
                </Text>
              </View>
          </View>
        </View>

        <Image
          style={{width: screenWidth, height: screenWidth*240/992, marginTop: '2%'}}
          source={require('../../images/user/delivery.png')}
        />

        <Image
          style={{width: screenWidth, height: screenWidth*240/992, marginTop: '5%'}}
          source={require('../../images/user/payment.png')}
        />

        <ImageBackground
          style={{
            width: screenWidth,
            height: (screenWidth * 114 / 1080),
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: "5%",
            marginTop: '5%',
          }}
          source={require('../../images/Basket/line.png')}
        >
          <Text style={{
            fontFamily: 'open-sans-Regular',
            fontSize: 20
          }}>
            31.1 €
          </Text>
        </ImageBackground>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10%',
          }}
        >
          <TouchableOpacity onPress={() => Actions.feedback()}>
            <Image
              style={{width: screenWidth/2, height: (screenWidth*103/457)/2}}
              source={require('../../images/user/feedback-btn.png')}
            />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
