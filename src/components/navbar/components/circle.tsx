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
      <View style={styles.channelsItemDot} />
      <Animated.Image
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
        source={{
          uri: "https://cdn.discordapp.com/icons/567636850513018880/494d7b094cb03c141f239b6cf9717e8e.webp?size=96"
        }}
      />
    </Pressable>
  );
}

const channelsItemDotSize = 9;
const serverItemSize = 50;
const styles = StyleSheet.create({
  list: {
    alignItems: "center",
  },
  serverItem: {
    height: serverItemSize,
    width: serverItemSize,
    borderRadius: serverItemSize / 2,
    backgroundColor: COLORS.grey_300,
    alignSelf: "center"
  },
  channelsItemDot: {
    height: channelsItemDotSize,
    width: channelsItemDotSize / 2,
    borderTopEndRadius: channelsItemDotSize / 2,
    borderBottomEndRadius: channelsItemDotSize / 2,
    backgroundColor: COLORS.white,
    marginRight: 12,
    top: (serverItemSize + channelsItemDotSize + channelsItemDotSize) / 2
  },
})