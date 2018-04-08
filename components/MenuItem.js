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
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modalbox';

import MenuBar1 from './MenuBar1';
import MenuBar2 from './MenuBar2';

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

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      backdropOpacity: 0.8,
    };
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    const checkMenuState = props => {
      if (this.props.heightBar) {
        return(
          <MenuBar1 />
        );
      } else {
        return(
          <MenuBar2 />
        );
      }
    };

    return (
      <View style={styles.container}>
        {checkMenuState()}

        <FlatList
        data={this.props.dataItem}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onLongPress={() => this.refs.modal1.open()}
              onPress={() => Actions.modalDetail()}>
              <FlatListItem item={item} index={index} />
            </TouchableOpacity>
          );
        }}
        />

        <Modal
          style={{
            width: screenWidth - 50,
            height: 390,
            borderRadius: 20,
          }}
          ref={'modal1'}
          backdropOpacity={this.state.backdropOpacity}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClosed}
          onOpened={this.onOpened}
          onClosingState={this.onClosingState}>
            <Image
              style={{
                width: screenWidth-10,
                height: (screenWidth-10) * 570 / 1080,
                marginTop: -15,
                marginLeft: -20,
              }}
              source={require('../images/Modal/cong-modal.png')}
            />
          <View style={{
            marginLeft: '5%',
            marginRight: '5%',
          }}>
            <Text style={{
              fontFamily: 'open-sans-Light',
              fontSize: 12,
            }}>
              The burger is a custom blend of ground prime rib, brisket, skirt steak
              and tenderloin, topped with Nueske’s bacon and Cowgirl Creamery’s triple-cream Mt. Tam cheese.
              The recipe is also delicious with a mix of chuck and sirloin.
            </Text>
          </View>

          <View style={{
            marginTop: '10%',
            marginLeft: '5%',
            marginRight: '5%',
          }}>
            <Text style={{
              fontFamily: 'open-sans-Light',
              fontSize: 12,
            }}>
              Ground prime rib, brisket, skirt steak
            </Text>
          </View>

          <View style={{
            marginLeft: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <View style={{
              flex: 1,
              marginTop: '5%'
            }}>

              <Text style={{
                fontFamily: 'open-sans-Light',
                fontSize: 12,
              }}>
                Price:
                <Text> </Text>
                <Text style={{
                  fontFamily: "open-sans-Regular",
                }}>6.5 EUR</Text>
              </Text>

              <Rating
                type='custom'
                ratingImage={require('../images/rating/star.png')}
                ratingColor='white'
                ratingCount={5}
                startingValue={5}
                imageSize={14}
                style={{
                  marginTop: '10%',
                }}
              />
            </View>

            <TouchableOpacity>
              <Image
                style={{
                  width: 90,
                  height: 90,
                }}
                source={require('../images/Modal/add-cart.png')}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
