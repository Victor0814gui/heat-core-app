import { createDrawerNavigator } from "@react-navigation/drawer";
import { SignUp } from "../../modules/session/screens/sign_up";
import { SignIn } from "../../modules/session/screens/sign_in";
import { ResetPassword } from "../../modules/session/screens/reset_password";



const AuthStack = createDrawerNavigator();

export function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="signup" component={SignUp} />
      <AuthStack.Screen name="signin" component={SignIn} />
      <AuthStack.Screen name="resetpassword" component={ResetPassword} />
    </AuthStack.Navigator>
  );
}