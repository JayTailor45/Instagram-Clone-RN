import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet, Platform} from 'react-native';
import {Icon, Header, Left, Body, Right, Container, Content, Button} from "native-base";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CardComponent from "../components/CardComponent";

export default class ProfileTab extends Component {

  images = [
    require('../assets/images/default_user.png'),
    require('../assets/images/default_user.png'),
    require('../assets/images/default_user.png'),
    require('../assets/images/default_user.png'),
    require('../assets/images/default_user.png'),
    require('../assets/images/default_user.png'),
    require('../assets/images/default_user.png')
  ];

  height = Dimensions.get('window').height;
  width = Dimensions.get('window').width;

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="person" style={{color: tintColor}}/>
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      activeViewIndex: 0
    }
  }

  segmentClicked(index) {
    this.setState({
      activeViewIndex: index
    })
  }

  renderSectionOne() {
    return this.images.map((image,index) => {
      return(
          <View key={index} style={[{
            width: (this.width)/3,
            height: (this.height)/6},
            { marginBottom: 2 },
            index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0}
          ]}>
            <Image
              style={{flex: 1, width: undefined, height: undefined}}
              source={image}
            />
          </View>
      )
    })
  }

  renderSection() {
    switch (this.state.activeViewIndex) {
      case 0:
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {this.renderSectionOne()}
            </View>
        );
      case 1:
        return (
            <View>
              <CardComponent like={'500'}/>
              <CardComponent like={'200'}/>
              <CardComponent like={'50'}/>
            </View>
        );
    }
  }

  render() {
    return (
        <Container style={{flex: 1, backgroundColor: 'white'}}>

          {/* Header bar*/}

          <Header style={[style.androidHeader]}>
            <Left>
              <Icon
                  name={"md-person-add"}
                  style={{padding: 10}}
              />
            </Left>
            <Body style={[style.androidHeaderTitle]}><Text>USERNAME</Text></Body>
            <Right>
              <EntypoIcon
                  name={"back-in-time"}
                  style={{paddingRight: 10, fontSize: 30}}
              />
            </Right>
          </Header>

          <Content>
            <View style={{paddingTop: 10}}>

              {/* User profile review */}

              <View style={{flexDirection: 'row',}}>
                <View style={{alignItems: 'center'}}>
                  <Image
                      source={require('../assets/images/default_user.png')}
                      style={{marginLeft: 10, height: 75, width: 75, borderRadius: 37.5}}
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
                    <Button bordered dark style={{flex: 3, justifyContent: 'center', height: 30, marginLeft: 10}}>
                      <Text>Edit Profile</Text>
                    </Button>
                    <Button bordered dark
                            style={{flex: 1, justifyContent: 'center', height: 30, marginLeft: 5, marginRight: 10}}>
                      <Icon name='settings' style={{fontSize: 15}}/>
                    </Button>
                  </View>
                </View>
              </View>

              {/* User Bio */}

              <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                <Text style={{fontWeight: 'bold'}}>username</Text>
                <Text>Bio...</Text>
                <Text>www.google.com</Text>
              </View>
            </View>
            <View>
              <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    borderTopWidth: 1,
                    borderColor: "#eae5e5"
                  }}>
                <Button
                    transparent
                    onPress={() => this.segmentClicked(0)}
                    active={this.state.activeViewIndex === 0}
                >
                  <Icon
                      name="apps"
                      style={[this.state.activeViewIndex === 0 ? {} : {color: 'grey'}]}
                  />
                </Button>
                <Button
                    transparent
                    onPress={() => this.segmentClicked(1)}
                    active={this.state.activeViewIndex === 1}
                >
                  <Icon
                      name="list"
                      style={[this.state.activeViewIndex === 1 ? {} : {color: 'grey'}]}
                  />
                </Button>
                <Button
                    transparent
                    onPress={() => this.segmentClicked(2)}
                    active={this.state.activeViewIndex === 2}
                >
                  <Icon
                      name="people"
                      style={[this.state.activeViewIndex === 2 ? {} : {color: 'grey'}]}
                  />
                </Button>
                {/*<Button*/}
                    {/*transparent*/}
                    {/*onPress={() => this.segmentClicked(3)}*/}
                    {/*active={this.state.activeViewIndex === 3}*/}
                {/*>*/}
                  {/*<Icon*/}
                      {/*name="bookmark"*/}
                      {/*style={[this.state.activeViewIndex === 3 ? {} : {color: 'grey'}]}*/}
                  {/*/>*/}
                {/*</Button>*/}
              </View>
              {this.renderSection()}
            </View>
          </Content>
        </Container>
    )
  }
}

const style = StyleSheet.create({
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