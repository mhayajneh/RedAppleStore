import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import WelcomeScreen from "../screens/WelcomeScreen";
import StoreDetails from "../screens/StoreDetails";
import StoreList from "../screens/StoreList";

const screens = {
  Home: {
    screen: WelcomeScreen,
  },
  StoreList: {
    screen: StoreList,
  },
  StoreDetails: {
    screen: StoreDetails,
  },
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);
