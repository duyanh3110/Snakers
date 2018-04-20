import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class MenuBar1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.iconStatus,
      menu: require('../images/menu/menu.png'),
      basket: require('../images/menu/cart.png'),
      user: require('../images/menu/user.png'),
      feedback: require('../images/menu/feedback.png')
    };
  }

  componentWillMount() {
    switch (this.state.status) {
      case 'menu':
        //this.state.menu = this.props.iconEnable;    //ok as well, but not cool
        this.setState({
          menu: this.props.iconEnable
        });
        break;
      case 'basket':
        //this.state.menu = this.props.iconEnable;    //ok as well, but not cool
        this.setState({
          basket: this.props.iconEnable
        });
        break;
      case 'user':
        //this.state.menu = this.props.iconEnable;    //ok as well, but not cool
        this.setState({
          user: this.props.iconEnable
        });
        break;
      case 'feedback':
        //this.state.menu = this.props.iconEnable;    //ok as well, but not cool
        this.setState({
          feedback: this.props.iconEnable
        });
        break;
      default:
        break;
    }
  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <View>
        <Image
          style={{width: screenWidth, height: screenWidth * 376 / 1080}}
          source={require('../images/menu/cover.png')}
        />

        <View style={{
          flexDirection: 'row',
          marginTop: -40,
        }}>
          <TouchableOpacity onPress={() => Actions.menu()}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={this.state.menu}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.basket()}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={this.state.basket}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.user()}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={this.state.user}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.feedback()}>
            <Image
              style={{width: screenWidth/4, height: (screenWidth * 103 / 272)/4}}
              source={this.state.feedback}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={{width: screenWidth, height: screenWidth * 176 / 1080}}
          source={this.props.srcCover}
        />
      </View>
    );
  }
}
