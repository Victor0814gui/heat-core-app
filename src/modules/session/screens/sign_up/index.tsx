import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

import { styles } from "./styles";


export function SignUp(){
  return(
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.container}>
        <TextInput />
        <TextInput/>
        <TextInput/>
        <Button title="logar"/>
      </View>
      </View>
    </ScrollView>
  )
}

