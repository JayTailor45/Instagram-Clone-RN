import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon, Container, Content} from "native-base";
import CardComponent from '../components/CardComponent'

export default class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="home" style={{color : tintColor}}/>
    )
  };

  render() {
    return (
      <Container style={style.container}>
        <Content>
          <CardComponent like={'30'}/>
          <CardComponent like={'10'}/>
          <CardComponent like={'32'}/>

        </Content>
      </Container>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});