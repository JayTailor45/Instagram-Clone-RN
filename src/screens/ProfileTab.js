import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {Icon, Header, Left, Body, Right, Container, Content, Button} from "native-base";
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default class ProfileTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="person" style={{color : tintColor}}/>
    )
  };


  render() {
    return (
        <Container style={{ flex: 1, backgroundColor: 'white'}}>
          <Header>
            <Left>
              <Icon
                  name={"md-person-add"}
                  style={{padding:10}}
              />
            </Left>
            <Body><Text>USERNAME</Text></Body>
            <Right>
              <EntypoIcon
                  name={"back-in-time"}
                  style={{paddingRight:10, fontSize: 30}}
              />
            </Right>
          </Header>
          <Content>
            <View style={{paddingTop: 10}}>
              <View style={{flexDirection: 'row',}}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/images/default_user.png')}
                    style={{ marginLeft: 10, height: 75, width: 75, borderRadius: 37.5}}
                  />
                </View>
                <View style={{flex: 3}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{alignItems: 'center'}}>
                      <Text>25</Text>
                      <Text style={{fontSize: 12, color: 'grey'}}>posts</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text>2k</Text>
                      <Text style={{fontSize: 12, color: 'grey'}}>followers</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text>157</Text>
                      <Text style={{fontSize: 12, color: 'grey'}}>following</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <Button bordered dark style={{flex: 3, justifyContent: 'center', height: 30, marginLeft:10}}>
                      <Text>Edit Profile</Text>
                    </Button>
                    <Button bordered dark style={{flex: 1, justifyContent: 'center', height: 30, marginLeft:5, marginRight:10}}>
                      <Icon name='settings' style={{fontSize: 15}}/>
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          </Content>
        </Container>
    )
  }
}