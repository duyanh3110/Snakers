/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { Rating } from 'react-native-elements';

import BurgerMenuData from '../data/burgerMenuData';

class FlatListItem extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
        <View style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'white',
          marginLeft: '5%',
          marginRight: '5%',
          marginBottom: '5%',
          marginTop: '5%',
          borderColor: '#f0f0f0',
          borderWidth: 1,
        }}>
          <Image
            style={{
              width: screenWidth/2.5,
              height: (screenWidth * 500 / 540)/2.5,
            }}
            source={{uri: this.props.item.imageUrl}}
          />
          <View style={{
            flex: 1,
            flexDirection: 'column',
            marginLeft: '5%',
            marginRight: '5%',
          }}>
            <Text style={{
              fontSize: 16,
              fontFamily: 'open-sans-Regular',
              marginTop: '2%',
              marginBottom: '2%',
            }}>{this.props.item.name}</Text>
            <Text style={{
              fontSize: 12,
              fontFamily: 'open-sans-Light',
              marginBottom: '2%',
            }}>{this.props.item.foodDescription}</Text>
            <Text style={{
              fontSize: 12,
              fontFamily: 'open-sans-Light',
            }}>
              Price:
              <Text> </Text>
              <Text style={{
                fontSize: 12,
                fontFamily: 'open-sans-Regular',
                marginBottom: '5%',
              }}>
                {this.props.item.price}
              </Text>
            </Text>

            <View style={{
              marginTop: '5%',
              marginBottom: '5%',
              flex: 1,
              alignItems: 'flex-end',
              flexDirection: 'row',
              justifyContent:'space-between',
            }}>
              <Rating
                type='custom'
                ratingImage={require('../images/rating/star.png')}
                ratingColor='white'
                ratingCount={5}
                startingValue={5}
                imageSize={14}
              />
              <TouchableOpacity>
                <Image
                  style={{
                    width: 14,
                    height: 14,
                  }}
                  source={require('../images/rating/cart.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
  }
}

export default class Burger extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <Image
          style={{width: screenWidth, height: screenWidth * 203 / 1080}}
          source={require('../images/menu/cover.png')}
        />

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 131 / 270)/4}}
              source={require('../images/menu/menu.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Basket')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 131 / 270)/4}}
              source={require('../images/menu/basket.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('User')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 131 / 270)/4}}
              source={require('../images/menu/user.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 131 / 270)/4}}
              source={require('../images/menu/feedback.png')}
            />
          </TouchableOpacity>
        </View>

        <Image
          style={{width: screenWidth, height: screenWidth * 176 / 1080}}
          source={require('../images/burger/burger.png')}
        />

        <FlatList
        data={BurgerMenuData}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('BurgerInfo')}
            >
              <FlatListItem item={item} index={index} />
            </TouchableOpacity>
          );
        }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
