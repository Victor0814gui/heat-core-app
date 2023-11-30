import React from 'react';
import { Text } from 'react-native';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Flyout } from 'react-native-windows';



export function Modal() {
  return (
    <Flyout
      isOpen={true}
      onDismiss={() => {
      }}
      placement="bottom-edge-aligned-left"
    >
      <View style={styles.containerWrapper}>
        <Text>Convidar</Text>
        <Text>Convidar</Text>
        <Text>Convidar</Text>
        <Text>Convidar</Text>
        <Text>Convidar</Text>
        <Text>Convidar</Text>
        <Text>Convidar</Text>
        <Text>Convidar</Text>
        <Text>Convidar</Text>
      </View>
    </Flyout>
  );
}

const imageAvatarSize = 40;


const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    padding: 12,
    height: 330,
    width: 440,
    backgroundColor: "red",
    position: "absolute",
  },
})