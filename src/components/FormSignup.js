import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class FormSignup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      verifyPass: ''
    };
  }

  signupUser = (email, password, username) => {
    try {
      if (this.state.password != this.state.verifyPass) {
        alert('Your password are not the same!!')
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        //https://firebase.google.com/docs/auth/web/manage-users
        const userInfo = firebase.auth().currentUser;
        if (userInfo) {
          // User sign up successful.
          const { username } = this.state;
          user.updateProfile({
            displayName: username
          }).then(function() {
            alert(user.displayName)
          }, function(error) {
            alert(error.toString())
            return;
          });
          console.log(user)
        } else {
          // No user is signed in.
          alert(e.toString())
          return;
        }
        //console.log(user)
      }, error => {
        alert(error.toString())
        return;
      })
    } catch (e) {
      alert(e.toString())
      return;
    }
  }

  goBack = () => {
    Actions.pop()
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>New Account</Text>
        </View>
        <View style={styles.formInput}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputContainer}>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Your name"
              placeholderTextColor='#ECF0F1'
              style={styles.input}
              onChangeText={username => this.setState({username})}
            />
          </View>
        </View>
        <View style={styles.formInput}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email"
              placeholderTextColor='#ECF0F1'
              visible-password= 'email-address'
              style={styles.input}
              onChangeText={email => this.setState({email})}
            />
          </View>
        </View>
        <View style={styles.formInput}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              placeholderTextColor='#ECF0F1'
              secureTextEntry={true}
              style={styles.input}
              onChangeText={password => this.setState({password})}
            />
          </View>
        </View>
        <View style={styles.formInput}>
          <Text style={styles.label}>Repeat password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Repeat Password"
              placeholderTextColor='#ECF0F1'
              secureTextEntry={true}
              style={styles.input}
              onChangeText={verifyPass => this.setState({verifyPass})}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button}
          onPress={() => this.signupUser(this.state.email, this.state.password)}>
          <Text style={styles.loginButton}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.suggestContainer}>
          <View>
            <Text style={styles.forgotPassText}>Already have an account? </Text>
          </View>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.suggestSignup}>Sign in</Text>
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
    justifyContent: 'flex-start',
    alignItems: "center"
  },
  titleContainer: {
    width: '100%',
    paddingTop: 44,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: '#ff6262'
  },
  titleText: {
    width: '70%',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff'
  },
  label: {
    fontSize: 8,
    color: '#8f8f8f'
  },
  formInput: {
    marginTop: 20
  },
  inputContainer: {
    borderColor: '#bdbaba',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingVertical: 1
  },
  input: {
    width: '70%',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingBottom: 0,
    marginVertical: 6,
    color: '#323232',
    fontSize: 14
  },
  button: {
    marginTop: 30,
    width: '70%',
    paddingVertical: 14,
    borderRadius: 25,
    backgroundColor: '#ff6262'
  },
  loginButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  },
  suggestContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18
  },
  forgotPassText: {
    fontSize: 12,
    color: '#323232'
  },
  suggestSignup: {
    fontSize: 12,
    color: '#323232',
    fontWeight: 'bold'
  }
});
