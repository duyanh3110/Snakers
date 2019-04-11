import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class Logo extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <View>
        <Image
          style={{width:screenWidth*0.7, height: (screenWidth*124/527)*0.7}}
          source={require('../images/logo2.png')}
        
        />
                  <div></div>
      </View>
    );
  }
}
