import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";

import { styles } from "./styles";
import { FONTS } from "../../../../shared/theme";

const url = "https://devblogs.microsoft.com/react-native/steamline-coreapp-windows/";




const Button = () => {
  const [ onHover,setOnHover ] = useState(false);

  return(
    <TouchableOpacity 
      //@ts-ignore
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      style={[styles.button,onHover && styles.buttonActive]}
      onPress={() => Linking.openURL(url)}
    >
      <Text style={styles.title}>Ir para documentação</Text>
    </TouchableOpacity>
  )
}

export function Dashboard():JSX.Element{
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.contentText}>react native Core App, com desempenhos e bench marcks incriveis</Text>
        <Text style={styles.contentDescription}>é uma nova API do react-native-windows que gera que a build a partir dea arquivos pré compilados em C passando pulando diversas estapas de contrução na qual somente configurações basicas são construidas do zero e a maior parte da logica fica confinada nas camadas do javascript</Text>
      </View>
      <Button/>
    </View>
  )
}

