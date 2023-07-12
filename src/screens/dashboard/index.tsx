import { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Image,
  TextInput,
  Linking,
  Pressable,
} from "react-native";

import { styles } from "./styles";

const url = "https://devblogs.microsoft.com/react-native/steamline-coreapp-windows/";

const Button = () => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Pressable onPress={() => Linking.openURL(url)}>
      {({ pressed }) => (
        <View
          style={[
            styles.button,
            onHover && styles.buttonHovered,
            pressed && styles.buttonPressed,
          ]}
          //@ts-ignore
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <Text style={styles.buttonText}>Ir para documentação</Text>
        </View>
      )}
    </Pressable>
  )
}

export function DashboardScreen(): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.subtitle}>
            Please enter the verification code we sent to: {'\n'}
            <Text style={styles.subtitleBold}>youremail@gmail.com</Text>
          </Text>
          <TextInput style={styles.input} />
          <Button />
        </View>
        <View style={styles.ticketContainer}>
          <View style={styles.ticketSection}>
            <Text style={styles.ticketTitle}>name:</Text>
            <Text style={styles.ticketSubtitle} lineBreakMode="middle">Victor Guilherme Coimbra Rocha</Text>
          </View>
          <View style={styles.ticketSection}>
            <Text style={styles.ticketTitle}>price:</Text>
            <Text style={styles.ticketSubtitle} lineBreakMode="middle">21R$</Text>
          </View>
          <View style={styles.separator}>
            <View style={[styles.dot, styles.left]} />
            <View style={styles.separatorDashed} />
            <View style={[styles.dot, styles.right]} />
          </View>
          <View style={styles.ticketSection}>
            <Text style={styles.ticketTitle}>time:</Text>
            <Text style={styles.ticketSubtitle} lineBreakMode="middle">21:40</Text>
          </View>
        </View>
      </View>
      {/* <Text>{JSON.stringify(Linking.getInitialURL())}</Text> */}
    </>
  )
}

