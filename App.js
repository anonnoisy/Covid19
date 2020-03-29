import {
    createDrawerNavigator,
} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// importing Screens
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from './src/screens/AboutScreen';
import PrecautionScreen from './src/screens/PrecautionScreen';
import HelpScreen from './src/screens/HelpScreen';
import TopHeadlinesScreen from './src/screens/TopHeadlinesScreen';

const Drawer = createDrawerNavigator({
    " Home ": {
        screen: HomeScreen,
    },
    " Top Headlines ": {
        screen: TopHeadlinesScreen,
    },
    " Precaution ": {
        screen: PrecautionScreen,
    },
    " Help Line ": {
        screen: HelpScreen,
    },
    " About ": {
        screen: AboutScreen
    }
}, {
  initialRouteName: ' Top Headlines ',
  drawerBackgroundColor: '#DEF7FF',
  keyboardDismissMode: 'on-drag',
  backBehavior: 'initialRoute',
  drawerPosition: 'left',
  minSwipeDistance: 20,
  navigationOptions: {
  },
  contentOptions: {
    activeBackgroundColor: '#C9F2FF',
  }
})

export default createAppContainer(Drawer);