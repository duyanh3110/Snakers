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

export let cartData = [];

export default class FlatListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemInfo: [],
      itemData: []
    };
  }

  componentWillMount() {
    this.setState({
      itemInfo: this.props.item
    });
  }

  componentDidMount() {
    this.itemSelectedHandler();
  }

  itemSelectedHandler = item => {
    item = this.state.itemInfo;
    const {itemData} = this.state;
    if (item.amount == -1) {
      this.setState({
        itemData: [...this.state.itemData, item]
      });
    }
    item.amount++;
    cartData = this.state.itemData;
    console.log(cartData);
  };

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
                {this.props.item.price} €
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
            <TouchableOpacity onPress={this.itemSelectedHandler}>
                <Image
                  style={{
                    width: 17,
                    height: 17,
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
