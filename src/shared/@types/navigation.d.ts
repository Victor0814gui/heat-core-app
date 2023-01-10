import { ViewPropTypes } from "react-native-windows";


export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList{
      profile: undefined;
      signin: undefined;
      signup: undefined;
      dashboard: undefined;
      navbar:undefined;
      reset_password
    }
  }
}