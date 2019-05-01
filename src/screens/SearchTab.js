import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon} from "native-base";

export default class SearchTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="search" style={{color : tintColor}}/>
    )
  };


  render() {
    return (
        <View>
          <Text>SearchTab</Text>
        </View>
    )
  }
}