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

import MenuBar1 from '../../components/MenuBar1';
import Avatar from '../../components/Avatar';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcCover: require('../../images/user/menu-top.png'),
      status: 'user',
      enabel: require('../../images/menu/user-active.png')
    };
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <MenuBar1
          srcCover={this.state.srcCover}
          iconEnable={this.state.enabel}
          iconStatus={this.state.status}
        />

        // Avatar
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <TouchableOpacity>
            <View style={{
              marginTop: '2%',
              marginBottom: '5%',
              width: 80,
              height: 80,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                style={{width: screenWidth/5, height: (screenWidth * 164 / 164)/5, marginBottom: '2%'}}
                source={require('../../images/user/ava-user.png')}
              />

              <TouchableOpacity style={{
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
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../images/user/edit-ava.png')}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        // Name
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '5%',
              paddingBottom: '5%',
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#e9e9e9',
              flexDirection: 'row',
            }}
          >
            <View style={{
              flexDirection: 'column',
            }}>
              <Text style={{
                fontFamily: 'open-sans-Bold',
                fontSize: 12,
                color: '#aeb5bf',
              }}>
                NAME
              </Text>

              <Text style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 16,
              }}>
                Minh Anh
              </Text>
            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <TouchableOpacity>
                <Image
                  style={{ width: 15, height: 15}}
                  source={require('../../images/user/arrow-gray.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        // Phone
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '5%',
              paddingBottom: '5%',
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#e9e9e9',
              flexDirection: 'row',
            }}
          >
            <View style={{
              flexDirection: 'column',
            }}>
              <Text style={{
                fontFamily: 'open-sans-Bold',
                fontSize: 12,
                color: '#aeb5bf',
              }}>
                PHONE
              </Text>

              <Text style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 16,
              }}>
                0449281545
              </Text>
            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <TouchableOpacity>
                <Image
                  style={{ width: 15, height: 15}}
                  source={require('../../images/user/arrow-gray.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        // Email
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '5%',
              paddingBottom: '5%',
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#e9e9e9',
              flexDirection: 'row',
            }}
          >
            <View style={{
              flexDirection: 'column',
            }}>
              <Text style={{
                fontFamily: 'open-sans-Bold',
                fontSize: 12,
                color: '#aeb5bf',
              }}>
                EMAIL
              </Text>

              <Text style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 16,
              }}>
                minhanh.vd31@gmail.com
              </Text>
            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <TouchableOpacity>
                <Image
                  style={{ width: 15, height: 15}}
                  source={require('../../images/user/arrow-gray.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

        // Password
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '5%',
              paddingBottom: '5%',
              justifyContent: 'space-between',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#e9e9e9',
              flexDirection: 'row',
            }}
          >
            <View style={{
              flexDirection: 'column',
            }}>
              <Text style={{
                fontFamily: 'open-sans-Bold',
                fontSize: 12,
                color: '#aeb5bf',
              }}>
                PASSWORD
              </Text>

              <Text style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 16,
              }}>
                .........
              </Text>
            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <TouchableOpacity>
                <Image
                  style={{ width: 15, height: 15}}
                  source={require('../../images/user/arrow-gray.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
