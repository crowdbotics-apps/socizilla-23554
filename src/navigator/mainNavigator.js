import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList60188174Navigator from '../features/ArticleList60188174/navigator';
import ArticleList61188173Navigator from '../features/ArticleList61188173/navigator';
import UserProfile188168Navigator from '../features/UserProfile188168/navigator';
import Maps188149Navigator from '../features/Maps188149/navigator';
import Settings188127Navigator from '../features/Settings188127/navigator';
import Settings188112Navigator from '../features/Settings188112/navigator';
import NotificationList188111Navigator from '../features/NotificationList188111/navigator';
import Maps188110Navigator from '../features/Maps188110/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList60188174: { screen: ArticleList60188174Navigator },
ArticleList61188173: { screen: ArticleList61188173Navigator },
UserProfile188168: { screen: UserProfile188168Navigator },
Maps188149: { screen: Maps188149Navigator },
Settings188127: { screen: Settings188127Navigator },
Settings188112: { screen: Settings188112Navigator },
NotificationList188111: { screen: NotificationList188111Navigator },
Maps188110: { screen: Maps188110Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
