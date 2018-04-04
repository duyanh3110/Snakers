import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={styles.logo}
          source={require('../images/logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 254,
    height: 80
  }
});
