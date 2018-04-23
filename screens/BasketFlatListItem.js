import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

class BasketFlatListItem extends Component {

  render() {
    let Amount = this.props.item.amount;
    let Price = this.props.item.price;
    let NameFood = this.props.item.name.toUpperCase();
    let FinalPrice = Amount * Price;
    let screenWidth = Dimensions.get('window').width;

    return (
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
            source={{uri: this.props.item.imageUrl}}
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
            {NameFood}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          >
            <ImageBackground
              source={require('../images/Basket/quantity.png')}
              style={{
                width: screenWidth*0.34,
                height: (screenWidth * 101 / 348)*0.34,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{width: screenWidth/20, height: (screenWidth * 45 / 45)/20}}
                  source={require('../images/Basket/minus-white.png')}
                />
              </TouchableOpacity>

              <Text
                style={{
                  color: 'white',
                  fontFamily: 'open-sans-Regular',
                  fontSize: 18,
                }}
              >
                {this.props.item.amount}
              </Text>

              <TouchableOpacity>
                <Image
                  style={{width: screenWidth/20, height: (screenWidth * 45 / 45)/20}}
                  source={require('../images/Basket/plus-white.png')}
                />
              </TouchableOpacity>
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
                {FinalPrice} €
              </Text>
            </View>
        </View>

      </View>
    );
  }
}

export default BasketFlatListItem;
