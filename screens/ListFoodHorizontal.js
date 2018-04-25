/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';

import OrderData from '../data/OrderData';

class FlatListItem extends Component {
    render() {
        return (
          <View>
            <View style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                style={{width: 70, height: 70, borderRadius: 35}}
                source={{uri: this.props.item.imageUrl}}
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
                  {this.props.item.amount}
                </Text>
              </View>
            </View>
          </View>
        );
    }
}

export default class ListFoodHorizontal extends Component {
  render() {
    return (
      <FlatList
        horizontal={true}
        data={OrderData}
        renderItem={({item, index})=>{
          return (<FlatListItem item={item} index={index} />);
        }}
      />
    );
  }
}
