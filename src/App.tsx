import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { COLORS } from './theme';
import { DashboardScreen } from "./screens/dashboard"
import { HomeScreen } from './screens/home-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SplashScreen } from './screens/splash-screen';
import { Navbar } from './components/navbar';
import { PrivateConversationsScreen } from './screens/private-conversations-screen';
import { Modal } from './components/modal';
import { Routes } from './routes';
import { View } from 'react-native';

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
    <View
      style={{
        flex: 1,
      }}
      onTouchMove={(e) => console.log(e)}
      onPointerMove={(e) => console.log(e)}
      onPointerUp={(e) => console.log(e)}
      onPointerLeave={(e) => console.log(e)}
    >
      <Routes />
    </View>
  )
}