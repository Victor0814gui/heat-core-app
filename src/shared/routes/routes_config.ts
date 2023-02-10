import { Platform } from "react-native";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
const platform = Platform.OS === 'windows' ||  Platform.OS === 'macos';

console.log(platform);

const screenOptions: DrawerNavigationOptions  = {
  headerShown: false,
  drawerType:  platform ? 'permanent' : 'back',
  drawerStyle:{
    width: 72,
    backgroundColor: "#202225",
    zIndex: 0,
  },
  drawerContentContainerStyle:{
    borderWidth:0,
  },
  drawerContentStyle:{
    borderWidth:0,
  }
}

export { screenOptions };