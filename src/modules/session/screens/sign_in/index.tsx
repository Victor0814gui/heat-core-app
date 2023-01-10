import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

import { styles } from "./styles";


export function SignIn(){
  return(
    <ScrollView>
      <View style={styles.container}>
        <TextInput />
        <TextInput/>
        <Button title="logar"/>
      </View>
    </ScrollView>
  )
}

