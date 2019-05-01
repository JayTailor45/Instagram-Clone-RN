import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {Card, CardItem,Thumbnail, Left, Right, Button, Icon, Body} from "native-base";

export default class CardComponent extends Component {

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
                source={require('../assets/images/default_user.png')}
            />
            <Body>
                <Text>username</Text>
                <Text note>Jan 1, 2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={require('../assets/images/default_post_image.png')}
            style={{height: 250, width: null, flex:1}}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon
                name='heart'
                style={{color:'black'}}
              />
            </Button>
            <Button transparent>
              <Icon
                  name='chatbubbles'
                  style={{color:'black'}}
              />
            </Button>
            <Button transparent>
              <Icon
                  name='send'
                  style={{color:'black'}}
              />
            </Button>
          </Left>
        </CardItem>
        <CardItem>
          <Text> {this.props.like} likes </Text>
        </CardItem>
        <CardItem>
          <Text>
            <Text style={{fontWeight: "900"}}> username </Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur delectus dignissimos dolor dolorum explicabo facere minima molestiae nam natus, nemo nulla odit porro quae quibusdam quo sapiente sit sunt?
          </Text>
        </CardItem>
      </Card>
    )
  }
}