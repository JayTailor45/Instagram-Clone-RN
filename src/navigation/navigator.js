import {createAppContainer, createStackNavigator, createSwitchNavigator} from "react-navigation";
import MainScreen from "../screens/MainScreen"


const Root = createStackNavigator({
  MainScreen,
});

export default createAppContainer(Root);