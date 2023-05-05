import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { COLORS } from './theme';
import { Dashboard } from "./dashboard"
import { HemeScreen } from './screens/home-screen';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.grey_210,
  },
};


export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <HemeScreen />
    </NavigationContainer>
  )
}