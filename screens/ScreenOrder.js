/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
  TextInput,
} from 'react-native';

import { firebaseApp } from '../components/FirebaseConfig';
console.disableYellowBox = true;
export default class ScreenOrder extends Component {
  constructor(props) {
    super(props);

    this.itemRef = firebaseApp.database();

    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
    };
  }

  listenForItems(itemRef) {
    var items = [];
    this.itemRef.ref('Feedback').limitToLast(1).on('child_added', (dataSnapshot) => {
        items.push({
          Delivery: dataSnapshot.val().Delivery,
          Quality: dataSnapshot.val().Quality,
          Service: dataSnapshot.val().Service,
          key: dataSnapshot.key
        });
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(items)
        });
    });
  }


  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View>
              <View style={{
                flexDirection: 'row',
                marginTop: '10%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
                <Text style={{
                    fontFamily: 'open-sans-Bold',
                    fontSize: 12,
                }}
                >
                  PREVIOUS FEEDBACK
                </Text>

                <View style={{
                  backgroundColor: 'black',
                  padding: '3%'
                }}>
                  <Text style={{
                    color: 'white',
                    fontFamily: 'open-sans-Regular',
                    fontSize: 14,
                  }}>
                    Order #1234567
                  </Text>
                </View>

              </View>

              <View style={{
                marginTop: '10%',
                marginLeft: '5%',
                marginRight: '5%',
              }}>
                <View>
                  <Text style={{
                    fontFamily: 'open-sans-Bold',
                    fontSize: 12,
                    color: '#aeb5bf',
                  }}>
                    DELIVERY QUALITY
                  </Text>
                  <Text style={{
                    fontFamily: 'open-sans-Regular',
                    fontSize: 14,
                  }}>
                    {rowData.Delivery}
                  </Text>
                </View>

                <View style={{
                  marginTop: "10%"
                }}>
                  <Text style={{
                    fontFamily: 'open-sans-Bold',
                    fontSize: 12,
                    color: '#aeb5bf',
                  }}>
                    FOOD QUALITY
                  </Text>
                  <Text style={{
                    fontFamily: 'open-sans-Regular',
                    fontSize: 14,
                  }}>
                    {rowData.Quality}
                  </Text>
                </View>

                <View style={{
                  marginTop: "10%"
                }}>
                  <Text style={{
                    fontFamily: 'open-sans-Bold',
                    fontSize: 12,
                    color: '#aeb5bf',
                  }}>
                    SERVING QUALITY
                  </Text>
                  <Text style={{
                    fontFamily: 'open-sans-Regular',
                    fontSize: 14,
                    marginBottom: '5%'
                  }}>
                    {rowData.Service}
                  </Text>
                </View>
              </View>
            </View>
          }
        />
      </View>

    );
  }

  componentDidMount() {
    this.listenForItems(this.itemRef);
  }
}
