import React, { useRef, useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { Pressable } from 'react-native-windows';
import { COLORS } from '../../../theme';


export function Circle({ ...rest }) {
  const anim = useRef(new Animated.Value(40)).current;
  const pressedAnim = useRef(new Animated.Value(0)).current;

  const onHoverIn = () => {
    Animated.timing(anim, {
      useNativeDriver: false,
      duration: 200,
      toValue: 10,
    }).start();
  }
  const onHoverOut = () => {
    Animated.timing(anim, {
      useNativeDriver: false,
      duration: 200,
      toValue: 40,
    }).start();
  }

  const onPressIn = () => {
    Animated.timing(pressedAnim, {
      useNativeDriver: false,
      duration: 200,
      toValue: 5,
    }).start()
  }
  const onPressOut = () => {
    Animated.timing(pressedAnim, {
      useNativeDriver: false,
      duration: 200,
      toValue: 0,
    }).start()
  }
  return (
    <Pressable
      {...rest}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        //@ts-ignore
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
        style={[
          styles.serverItem,
          {
            borderRadius: anim,
            transform: [{ translateY: pressedAnim }]
          }
        ]}
      >
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 70,
    backgroundColor: COLORS.grey_130,
  },
  list: {
    alignItems: "center",
  },
  serverItem: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginVertical: 4,
    backgroundColor: COLORS.grey_300,
  }
})