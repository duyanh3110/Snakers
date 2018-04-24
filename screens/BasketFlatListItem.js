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
  constructor(props) {
    super(props);

    this.state = {
      key: this.props.item.key,
      amount: this.props.item.amount,
      price: this.props.item.price,
      name: this.props.item.name.toUpperCase(),
      finalPrice: 0
    };
  }

  componentWillMount() {
    this.state.finalPrice = this.state.amount * this.state.price;
  }

  increaseAmount = () => {
    let newAmount = this.state.amount++;
    this.setState({
      amount: newAmount + 1,
      finalPrice: this.state.amount*this.state.price
    });
  }

  decreaseAmount = () => {
    let newAmount = this.state.amount--;
    this.setState({
      amount: newAmount - 1,
      finalPrice: this.state.amount*this.state.price
    });
    if (this.state.amount == 0) {
      this.props.removeItem(this.state.key);
    }
    //console.log(this.state.amount);
  }

  render() {
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
            {this.state.name}
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
              <TouchableOpacity onPress={this.decreaseAmount}>
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
                {this.state.amount}
              </Text>

              <TouchableOpacity onPress={this.increaseAmount}>
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
                {this.state.finalPrice} €
              </Text>
            </View>
        </View>

      </View>
    );
  }
}

export default BasketFlatListItem;
