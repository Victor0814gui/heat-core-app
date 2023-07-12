import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Flyout } from 'react-native-windows';



export function Modal({ props }: any) {
  return (
    <Flyout
      {...props}
      placement="full"
      isLightDismissEnabled={true}
    >
      <View style={styles.containerWrapper}>
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
    backgroundColor: "#f2f2f2"
  },
})