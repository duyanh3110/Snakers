/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a Home Page</Text>
        <Button
          onPress={() => this.props.navigation.navigate('MenuPage')}
          title ="Go to Menu Page"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
