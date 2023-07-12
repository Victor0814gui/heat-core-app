import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { COLORS } from './theme';
import { DashboardScreen } from "./screens/dashboard"
import { HomeScreen } from './screens/home-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SplashScreen } from './screens/splash-screen';
import { Navbar } from './components/navbar';
import { PrivateConversationsScreen } from './screens/private-conversations-screen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.grey_210,
  },
};

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <Navbar {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: "permanent",
          drawerStyle: {
            width: 70,
            backgroundColor: COLORS.grey_210,
          },
        }}
      >
        <Drawer.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            drawerType: "slide"
          }}
        />
        <Drawer.Screen initialParams={{ itemId: 0 }} name="Home" component={HomeScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="PrivateConversations" component={PrivateConversationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}