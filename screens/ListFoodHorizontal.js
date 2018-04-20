/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

export default class ListFoodHorizontal extends Component {
  render() {
    return (
      

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >

        <View style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Image
            style={{width: 70, height: 70, borderRadius: 35}}
            source={require('../images/feedback/food1.png')}
          />

          <View style={{
            position: 'absolute',
            left: 50,
            top: 50,
            width: 30,
            height: 30,
            backgroundColor: 'red',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              backgroundColor: 'transparent',
              color: 'white',
            }}>
              1
            </Text>
          </View>
        </View>

        <View style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Image
            style={{width: 70, height: 70, borderRadius: 35}}
            source={require('../images/feedback/food2.png')}
          />

          <View style={{
            position: 'absolute',
            left: 50,
            top: 50,
            width: 30,
            height: 30,
            backgroundColor: 'red',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              backgroundColor: 'transparent',
              color: 'white',
            }}>
              1
            </Text>
          </View>
        </View>

        <View style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          justifyContent: 'space-around',
          alignItems: 'center',

        }}>
          <Image
            style={{width: 70, height: 70, borderRadius: 35}}
            source={require('../images/feedback/food3.png')}
          />

          <View style={{
            position: 'absolute',
            left: 50,
            top: 50,
            width: 30,
            height: 30,
            backgroundColor: 'red',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              backgroundColor: 'transparent',
              color: 'white',
            }}>
              1
            </Text>
          </View>
        </View>

        <View style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Image
            style={{width: 70, height: 70, borderRadius: 35}}
            source={require('../images/feedback/food4.png')}
          />

          <View style={{
            position: 'absolute',
            left: 50,
            top: 50,
            width: 30,
            height: 30,
            backgroundColor: 'red',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              backgroundColor: 'transparent',
              color: 'white',
            }}>
              2
            </Text>
          </View>
        </View>

        <View style={{
          width: 82,
          height: 80,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Image
            style={{width: 70, height: 70, borderRadius: 35}}
            source={require('../images/feedback/food5.png')}
          />

          <View style={{
            position: 'absolute',
            left: 50,
            top: 50,
            width: 30,
            height: 30,
            backgroundColor: 'red',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              backgroundColor: 'transparent',
              color: 'white',
            }}>
              4
            </Text>
          </View>
        </View>

      </ScrollView>
    );
  }
}
