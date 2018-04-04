import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FormSignup from '../components/FormSignup';

export default class Signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FormSignup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
});
