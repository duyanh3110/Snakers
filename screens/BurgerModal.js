/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window');

export default class BurgerModal extends Component {
  render() {
    showModal = () => {
      this.refs.myModal.open();
    };

    return (
      <Modal
        ref={'myModal'}
        style={{
          justifyContent: 'center',
          borderRadius: 30,
          shadowRadius: 10,
          width: screen.width - 80,
          height: 280,
        }}
        position='center'
        backdrop={true}
        onClosed={() => {
          alert("Modal closed!")
        }}
      >
        <Text>Burger Information Modal</Text>
      </Modal>
    );
  }
}
