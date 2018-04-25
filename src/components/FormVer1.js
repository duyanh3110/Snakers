import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class FormSignin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        const userInfo = firebase.auth().currentUser;
        /*if (userInfo) {
          // User is signed in.
          alert(user.displayName)
        } else {
          // No user is signed in.
          alert(e.toString())
          return;
        }*/
        Actions.home()
        console.log(user)
      }, error => {
        alert(error.toString())
        return;
      })
    } catch (e) {
      alert(e.toString())
      return;
    }
  }

  signup = () => {
    Actions.home()
  };

  render() {
    return (
      <View style={styles.container}>
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
              placeholderTextColor='#c3c3c3'
              style={styles.input}
              onChangeText={email => this.setState({email})}
            />
          </View>
        </View>
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
              placeholderTextColor='#c3c3c3'
              secureTextEntry={true}
              style={styles.input}
              onChangeText={password => this.setState({password})}
            />
          </View>
        </View>
        <View style={styles.forgotPassContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}
          onPress={() => this.loginUser(this.state.email, this.state.password)}>
          <Text style={styles.loginButton}>SIGN IN</Text>
        </TouchableOpacity>
        <View style={styles.suggestContainer}>
          <View>
            <Text style={styles.forgotPassText}>Not a member yet? </Text>
          </View>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.suggestSignup}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: "center"
  },
  label: {
    fontSize: 8,
    color: '#fff'
  },
  formInput: {
    marginTop: 20
  },
  inputContainer: {
    borderColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 1
  },
  logo: {
    width: 18,
    height: 18,
  },
  input: {
    width: '55%',
    backgroundColor: 'rgba(0,0,0,0)',
    marginHorizontal: 18,
    paddingBottom: 0,
    marginVertical: 6,
    color: '#fff',
    fontSize: 14
  },
  forgotPassContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 18
  },
  forgotPassText: {
    fontSize: 12,
    color: '#fff'
  },
  button: {
    marginTop: 26,
    width: '70%',
    paddingVertical: 14,
    borderRadius: 25,
    backgroundColor: '#fff'
  },
  loginButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ff6262'
  },
  suggestContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18
  },
  suggestSignup: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold'
  }
});
