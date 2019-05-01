import React, {Component} from 'react'
import {SafeAreaView, View, Text, Platform} from 'react-native'
import {Icon} from "native-base";

import {createBottomTabNavigator, createAppContainer} from "react-navigation";

import HomeTab from "./HomeTab"
import SearchTab from "./SearchTab"
import AddMediaTab from "./AddMediaTab"
import LikesTab from "./LikesTab"
import ProfileTab from "./ProfileTab"

export default class MainScreen extends Component{

  static navigationOptions = {
    headerLeft:
        <Icon
            name={"camera"}
            style={{padding:12}}
        />,
    title: "Instagram",
    headerRight:
        <Icon
            name={"send"}
            style={{padding:12}}
        />
  };

  render() {
    return (
        <TabContainer/>
    );
  }
}

const AppTabNavigator = createBottomTabNavigator({
  HomeTab,
  SearchTab,
  AddMediaTab,
  LikesTab,
  ProfileTab
},{
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style:{
      ...Platform.select({
        android: {
          backgroundColor: 'white'
        }
      })
    },
    activeTintColor: "#000",
    inactiveTintColor: "#333",
    showLabel: false,
    showIcon: true
  }
});

const TabContainer = createAppContainer(AppTabNavigator)
