import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon} from "native-base";

export default class LikesTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="heart" style={{color : tintColor}}/>
    )
  };


  render() {
    return (
      <View>
        <Text>LikesTab</Text>
      </View>
    )
  }
}