import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import MainScreen from "../screens/MainScreen"
import Register from "../screens/Register"
import Login from "../screens/Login"
import SplashScreen from "../screens/SplashScreen"


const AuthStack = createStackNavigator({
  Login,
  Register
}, {headerMode: 'none'});

const AppStack = createStackNavigator({
  MainScreen
}, {headerMode: 'none'});


const Root = createSwitchNavigator({
  SplashScreen,
  AppStack,
  AuthStack
});

export default createAppContainer(Root);