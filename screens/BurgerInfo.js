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
} from 'react-native';

export default class BurgerInfo extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={{
            backgroundColor: 'white',
          }}>
            <Image
              style={{width: screenWidth, height: screenWidth * 1080 / 1128}}
              source={require('../images/burger-info/cover.png')}
            />

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '12%',
              marginRight: '12%',
              padding: 10,
              borderWidth: 2,
            }}>
              <Text style={{
                color: 'black',
                fontFamily: 'open-sans-Regular',
                fontSize: 16,
              }}>
                Bacon Burgers on Brioche Buns
              </Text>
            </View>
          </View>

          <View style={{
            marginTop: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '12%',
            marginRight: '12%',
          }}>
            <Text style={{
              fontFamily: 'open-sans-Light',
              fontSize: 12,
              textAlign: 'center',
            }}>
              The burger is a custom blend of ground prime rib, brisket, skirt steak and tenderloin, topped with Nueske’s bacon and Cowgirl Creamery’s triple-cream Mt. Tam cheese.
            </Text>
          </View>

          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '12%',
            marginRight: '12%',
          }}>
            <Text style={{
              fontFamily: 'open-sans-Light',
              fontSize: 12,
              textAlign: 'center',
            }}>
              The recipe is also delicious with a mix of chuck and sirloin.
            </Text>
            <Text style={{
              fontFamily: 'open-sans-Regular',
              fontSize: 16,
              textAlign: 'center',
              marginTop: '5%',
            }}>
              6.5 €
            </Text>
          </View>
        </View>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TouchableOpacity>
            <Image
              style={{width: 100, height: 90}}
              source={require('../images/burger-info/order-btn.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: screenWidth/1.5, height: (screenWidth * 38 / 785)/1.5}}
          source={require('../images/burger-info/stars.png')}
        />
        </View>

        <View style={{
          marginTop: '5%',
          marginLeft: '12%',
          marginRight: '12%',
          flexDirection: 'row',
        }}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../images/burger-info/feed1-ava.png')}
          />
          <View style={{
            marginLeft: '5%',
            flexDirection: 'column',
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <Text style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 14,
              }}>
                Johnny Envy
              </Text>

              <Image
                style={{width: 130/2, height: 20/2}}
                source={require('../images/burger-info/rating1.png')}
              />
            </View>

            <View style={{
              marginTop: '2%',
              width: '80%',
            }}>
              <Text style={{
                fontFamily: 'open-sans-Light',
                fontSize: 12,
              }}>
                Everyone loved the food and the cake was amazing… beautiful & yummy! As always, you guys did a wonderful job with the event and people walk away asking about the food.
              </Text>
            </View>

          </View>
        </View>

        <View style={{
          marginTop: '5%',
          marginLeft: '12%',
          marginRight: '12%',
          flexDirection: 'row',
        }}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../images/burger-info/feed2-ava.png')}
          />
          <View style={{
            marginLeft: '5%',
            flexDirection: 'column',
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <Text style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 14,
              }}>
                Elisa Jones
              </Text>

              <Image
                style={{width: 130/2, height: 20/2}}
                source={require('../images/burger-info/rating2.png')}
              />
            </View>

            <View style={{
              marginTop: '2%',
              width: '80%',
            }}>
              <Text style={{
                fontFamily: 'open-sans-Light',
                fontSize: 12,
              }}>
                An excellent dinner, with little twists to make it interesting. The fresh bread at the start came with butter with a hint of chili and herbs. The seabass came with a few hazelnuts on top - not expected, but the tastes worked together well.
              </Text>
            </View>

          </View>
        </View>

        <View style={{
          marginTop: '5%',
          marginLeft: '12%',
          marginRight: '12%',
          flexDirection: 'row',
        }}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../images/burger-info/feed3-ava.png')}
          />
          <View style={{
            marginLeft: '5%',
            flexDirection: 'column',
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <Text style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 14,
              }}>
                James Parker
              </Text>

              <Image
                style={{width: 130/2, height: 20/2}}
                source={require('../images/burger-info/rating3.png')}
              />

            </View>

            <View style={{
              marginTop: '2%',
              marginBottom: '5%',
              width: '80%',
            }}>
              <Text style={{
                fontFamily: 'open-sans-Light',
                fontSize: 12,
              }}>
                Ate here on New years eve,absolutely fantastic food! Its only been open for 5 months and on that night was only the manager and the chef and what a great job they did.
              </Text>
            </View>

          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
