import {createDrawerNavigator} from '@react-navigation/drawer';
import {Navbar} from '../components/navbar';
import {NavigationContainer} from '@react-navigation/native';

import {SplashAnimationScreen} from '../screens/SplashAnimationScreen';
import {HomeChannelsScreen} from '../screens/HomeChannelsScreen';
import {PrivateChannelScreen} from '../screens/PrivateChannelScreen';

import {navigationScreenOptions} from '../configs/NavigationScreenOptions';
import {navigationContainerTheme} from '../configs/NavigationContainerTheme';

const Drawer = createDrawerNavigator();

export const screensName = {
  splashAnimationScreen: 'SplashAnimationScreen',
  homeChannelsScreen: 'HomeChannelsScreen',
  privateChannelScreen: 'PrivateChannelScreen',
};

export function Routes() {
  return (
    <NavigationContainer theme={navigationContainerTheme}>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={props => <Navbar {...props} />}
        screenOptions={{
          ...navigationScreenOptions,
        }}>
        <Drawer.Screen
          initialParams={{itemId: 0}}
          options={{drawerType: 'back'}}
          name={screensName.splashAnimationScreen}
          component={SplashAnimationScreen}
        />
        <Drawer.Screen
          name={screensName.homeChannelsScreen}
          component={HomeChannelsScreen}
        />
        <Drawer.Screen
          name={screensName.privateChannelScreen}
          component={PrivateChannelScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
