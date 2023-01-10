import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../../modules/lessons/screens/dashboard";
import { createDrawerNavigator } from "@react-navigation/drawer";



const UserStack = createDrawerNavigator();

export function UserRoutes() {
  return (
    <UserStack.Navigator
      useLegacyImplementation
      initialRouteName="dashboard"
      screenOptions={{
        headerShown:false,
      }}
    >
      <UserStack.Screen name="dashboard" component={Dashboard} />
    </UserStack.Navigator>
  );
}