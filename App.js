import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./.expo/src/screens/SearchScreen";
const navigator = createStackNavigator({
Search: SearchScreen,
  },{
    intitialRouteName: 'Search',
    defaultNavigationOptions: { title:'Business Search'}
  });

  export default createAppContainer(navigator);