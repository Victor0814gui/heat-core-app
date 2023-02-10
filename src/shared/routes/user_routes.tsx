import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../../modules/lessons/screens/dashboard";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Navbar } from "./navbar";
import { Home } from "../../modules/lessons/screens/home";
import { screenOptions } from "./routes_config";



const UserStack = createDrawerNavigator();

export function UserRoutes() {
  return (
    <UserStack.Navigator
      useLegacyImplementation
      initialRouteName="home"
      drawerContent={(props) => <Navbar {...props}/>}
      screenOptions={screenOptions}
    >
      <UserStack.Screen name="dashboard" component={Dashboard} />
      <UserStack.Screen name="home" component={Home} />
    </UserStack.Navigator>
  );
}