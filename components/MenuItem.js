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

import FlatListItem from './FlatListItem';
import MenuBar1 from './MenuBar1';
import MenuBar2 from './MenuBar2';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      backdropOpacity: 0.8,
      srcCover: this.props.srcCover,
      cartData: []
    };
  }

  componentDidMount() {
    this.dataCallback();
  }

  dataCallback = item => {
    const {cartData} = this.state;
    this.setState({
      cartData: [...this.state.cartData, item]
    });
    console.log(this.state.cartData);
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    const checkMenuState = props => {
      if (this.props.heightBar) {
        return(
          <MenuBar1 srcCover={this.state.srcCover}/>
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
              <FlatListItem
                item={item}
                index={index}
                addCartData={this.dataCallback}
              />
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
