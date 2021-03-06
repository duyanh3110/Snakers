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
  TextInput,
} from 'react-native';

import Modal from 'react-native-modalbox';

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
      enabel: require('../../images/menu/user-active.png'),
      name: '',
      email: '',
      phoneNum: '0403242696',
      address: 'Kajaanintie 40 C 21/2 90130, Oulu'
    };
  }

  componentWillMount() {
    let user = firebase.auth().currentUser;
      if (user != null) {
      this.setState({
        name : user.displayName,
        email : user.email,
        //phoneNum : user.phoneNumber
      });
    }
    console.log(user);
  }

  CloseNameModal() {
    let user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: this.state.name
    }).then(function() {
      // Update successful.
      console.log(user);
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
    this.refs.modalname.close();
    this.refs.successuser.open();
  }

  phoneNumberSubmit = () => {
    let user = firebase.auth().currentUser;
    user.updateProfile({
      phoneNumber: this.state.phoneNum
    }).then(function() {
      // Update successful.
      console.log(user.phoneNumber);
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
    this.refs.modalphone.close();
    this.refs.successuser.open();
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

        <ScrollView
          style={{
            backgroundColor: 'white',
          }}
        >
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

          <TouchableOpacity
            onPress={ ()=>this.refs.modalname.open() }
          >
            <View
              style={{
                backgroundColor: 'white',
                paddingLeft: '10%',
                paddingRight: '10%',
                paddingTop: '5%',
                paddingBottom: '5%',
                justifyContent: 'space-between',
                borderTopWidth: 2,
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
                  {this.state.name}
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

          <TouchableOpacity onPress={ ()=>this.refs.modalphone.open()} >
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
                  {this.state.phoneNum}
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
                  {this.state.email}
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
                  ADDRESS
                </Text>

                <Text style={{
                  fontFamily: 'open-sans-Regular',
                  fontSize: 16,
                }}>
                  {this.state.address}
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

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                marginBottom: "10%",
                paddingLeft: '10%',
                paddingRight: '10%',
                paddingTop: '5%',
                paddingBottom: '5%',
                justifyContent: 'space-between',
                borderTopWidth: 1,
                borderBottomWidth: 2,
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
        </ScrollView>

        <Modal
          style={{
            width: screenWidth - 50,
            height: 300,
            borderRadius: 20,
            justifyContent: 'center',
          }}
          ref={'modalname'}
          position={"center"}
          swipeArea={20}
        >
          <View
            style={{
              marginLeft: '10%',
              marginRight: '10%',
            }}
          >
            <Text style={{
              fontFamily: 'open-sans-Bold',
              fontSize: 12,
              color: '#aeb5bf',
              marginBottom: '2%'
            }}>
              NAME
            </Text>

            <TextInput
              onChangeText={val => {
                this.setState({
                  name: val
                });
              }}
              value={this.state.name}
              underlineColorAndroid='transparent'
              placeholder='Name'
              placeholderTextColor='#999999'
              style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 16,
                width: '100%',
                borderBottomWidth: 2,
                borderBottomColor: 'black'
              }}
            />
          </View>

          <View
            style={{
              marginTop: '20%',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress= {this.CloseNameModal.bind(this)}
            >
              <Image
                style={{width: screenWidth/2, height: (screenWidth * 103/457)/2}}
                source={require('../../images/user/update-btn.png')}
              />
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          style={{
            width: screenWidth - 50,
            height: 300,
            borderRadius: 20,
            justifyContent: 'center',
          }}
          ref={'modalphone'}
          position={"center"}
          swipeArea={20}
        >
          <View
            style={{
              marginLeft: '10%',
              marginRight: '10%',
            }}
          >
            <Text style={{
              fontFamily: 'open-sans-Bold',
              fontSize: 12,
              color: '#aeb5bf',
              marginBottom: '2%'
            }}>
              PHONE NUMBER
            </Text>

            <TextInput
              onChangeText={val => {
                this.setState({
                  phoneNum: val
                });
              }}
              value={this.state.phoneNum}
              underlineColorAndroid='transparent'
              placeholder='+385 0123 456'
              placeholderTextColor='#999999'
              style={{
                fontFamily: 'open-sans-Regular',
                fontSize: 16,
                width: '100%',
                borderBottomWidth: 2,
                borderBottomColor: 'black'
              }}
            />
          </View>

          <View
            style={{
              marginTop: '20%',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress= {this.phoneNumberSubmit.bind(this)}
            >
              <Image
                style={{width: screenWidth/2, height: (screenWidth * 103/457)/2}}
                source={require('../../images/user/update-btn.png')}
              />
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          style={{
            width: screenWidth - 50,
            height: 300,
            borderRadius: 20,
            paddingTop: '10%',
            alignItems: 'center',
          }}
          ref={'successuser'}
          position={"center"}
          swipeArea={21}
        >
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={require('../../images/Basket/done-tick.png')}
          />

          <View style={{
            marginTop: '10%',
          }}>
            <Text style={{
              fontFamily: 'open-sans-Regular',
              fontSize: 14,
            }}>
              Setting saved
            </Text>
          </View>

          <TouchableOpacity onPress={() => this.refs.successuser.close()}>
            <Image
              style={{
                width: screenWidth/2,
                height: (screenWidth * 103/457)/2,
                marginTop: '10%',
              }}
              source={require('../../images/Basket/done-btn.png')}
            />

          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
