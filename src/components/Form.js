import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

export default class Form extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        //User name input
        <View style={styles.formInput}>
          <Text style={styles.label}>Username or Email</Text>
          <View style={styles.inputContainer}>
            <Image
              style={styles.logo}
              source={require('../images/user.png')}
            />
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email"
              placeholderTextColor='#f98383'
              style={styles.input}
            />
          </View>
        </View>

        //Password input
        <View style={styles.formInput}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Image
              style={styles.logo}
              source={require('../images/key.png')}
            />
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              placeholderTextColor='#f98383'
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
        </View>

        //Sign in button
        <TouchableOpacity style={styles.button}>
          <Text style={styles.loginButton}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center"
  },
  label: {
    fontSize: 8,
    color: '#fff'
  },
  formInput: {
    marginTop: 24
  },
  inputContainer: {
    borderColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 2
  },
  logo: {
    width: 18,
    height: 18
  },
  input: {
    width: 222,
    backgroundColor: 'rgba(0,0,0,0)',
    paddingHorizontal: 18,
    paddingBottom: 0,
    marginVertical: 6,
    color: '#fff',
    fontSize: 14
  },
  button: {
    marginTop: 24,
    width: 242,
    paddingVertical: 14,
    borderRadius: 25,
    backgroundColor: '#fff'
  },
  loginButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ff6262'
  }
});
