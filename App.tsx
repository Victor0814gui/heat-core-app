import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { SplashScreen } from "./src/shared/splash_screen";
import { Router } from './src/shared/routes';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#2e2e2e"
  },
};


export default function App(){
  return(
    <NavigationContainer theme={MyTheme}>
      <Router/>
    </NavigationContainer>
  )
}