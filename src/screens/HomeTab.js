import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Platform, StatusBar, Image} from 'react-native';
import {Icon, Container, Content, Thumbnail, Header, Left, Right, Body} from "native-base";
import CardComponent from '../components/CardComponent'

export default class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="home" style={{color: tintColor}}/>
    )
  };

  render() {
    return (
        <Container style={style.container}>
          <Header style={[style.androidHeader]}>
            <Left>
              <Icon
                  name={"camera"}
                  style={{padding:10}}
              />
            </Left>
            <Body style={[style.androidHeaderTitle]}>
              <Image
                  style={{}}
                  source={require('../assets/images/instagram_logo.png')}
              />
            </Body>
            <Right>
              <Icon
                  name={"send"}
                  style={{padding:10}}
              />
            </Right>
          </Header>
          <Content>
            <View style={style.header}>
              <View style={style.story_header}>
                <Text style={{ fontWeight: 'bold'}}>Stories</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name='md-play' style={{fontSize: 14}}/>
                  <Text style={{ fontWeight: 'bold'}}> Watch All</Text>
                </View>
              </View>
              <View style={style.story_thumb}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    alignItems: 'center',
                    paddingStart: 5,
                    paddingEnd: 5
                  }}
                >
                  <Thumbnail
                      source={require('../assets/images/default_user.png')}
                      style={style.story_thumb_img}
                  />
                  <Thumbnail
                      source={require('../assets/images/default_user.png')}
                      style={style.story_thumb_img}
                  />
                  <Thumbnail
                      source={require('../assets/images/default_user.png')}
                      style={style.story_thumb_img}
                  />
                  <Thumbnail
                      source={require('../assets/images/default_user.png')}
                      style={style.story_thumb_img}
                  />
                  <Thumbnail
                      source={require('../assets/images/default_user.png')}
                      style={style.story_thumb_img}
                  />
                  <Thumbnail
                      source={require('../assets/images/default_user.png')}
                      style={style.story_thumb_img}
                  />
                  <Thumbnail
                      source={require('../assets/images/default_user.png')}
                      style={style.story_thumb_img}
                  />
                  <Thumbnail
                      source={require('../assets/images/default_user.png')}
                      style={style.story_thumb_img}
                  />
                </ScrollView>
              </View>
            </View>

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
  },
  header: {
    height: 100,
  },
  story_header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7
  },
  story_thumb: {
    flex: 3
  },
  story_thumb_img: {
    marginHorizontal: 5,
    borderColor: 'pink',
    borderWidth: 3
  },
  androidHeader: {
    ...Platform.select({
      android: {
        backgroundColor: 'white'
      }
    })
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: 'flex-end'
      }
    })

  }
});