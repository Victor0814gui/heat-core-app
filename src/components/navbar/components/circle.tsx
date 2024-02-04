import React, {useRef, useState} from 'react';
import {View, Animated, StyleSheet, Text, PressableProps} from 'react-native';
import {Flyout, Pressable} from 'react-native-windows';
import {COLORS} from '../../../theme';
import {cursorPointer} from '../../../native/CursorPointer';

type CircleProps = PressableProps & {
  questions?: number;
  name?: string;
  thumbnailUrl?: string;
};

export function Circle({name, questions, thumbnailUrl, ...rest}: CircleProps) {
  const buttonRef = useRef(null);
  const anim = useRef(new Animated.Value(40)).current;
  const pressedAnim = useRef(new Animated.Value(0)).current;

  const [shotFlyout, setShotFlyout] = useState(false);

  const onHoverIn = async () => {
    console.log('onHoverIn');
    setShotFlyout(true);
    if (!!shotFlyout) {
    }
    await cursorPointer.cursor('hand');
    Animated.timing(anim, {
      useNativeDriver: false,
      duration: 300,
      toValue: 10,
    }).start();
  };

  const onHoverOut = async () => {
    console.log('onHoverOut');
    setShotFlyout(false);
    if (!shotFlyout) {
    }
    await cursorPointer.cursor('arrow');
    Animated.timing(anim, {
      useNativeDriver: false,
      duration: 300,
      toValue: 40,
    }).start();
  };

  const onPressIn = () => {
    Animated.timing(pressedAnim, {
      useNativeDriver: false,
      duration: 300,
      toValue: 5,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(pressedAnim, {
      useNativeDriver: false,
      duration: 300,
      toValue: 0,
    }).start();
  };

  return (
    <>
      <View
        style={{
          position: 'relative',
        }}>
        <Pressable
          ref={buttonRef}
          {...rest}
          onHoverIn={onHoverIn}
          onHoverOut={onHoverOut}
          onPressIn={onPressIn}
          onPressOut={onPressOut}>
          <Animated.View
            style={[
              styles.channelsItemDot,
              {
                top: anim.interpolate({
                  extrapolate: 'extend',
                  inputRange: [10, 40],
                  outputRange: [16, 25],
                }),
                height: anim.interpolate({
                  extrapolate: 'extend',
                  inputRange: [10, 40],
                  outputRange: [30, 10],
                }),
              },
            ]}
          />
          <Animated.Image
            style={[
              styles.serverItem,
              {
                borderRadius: anim,
                transform: [{translateY: pressedAnim}],
              },
            ]}
            source={{
              uri:
                thumbnailUrl ??
                'https://cdn.discordapp.com/icons/567636850513018880/494d7b094cb03c141f239b6cf9717e8e.webp?size=96',
            }}
          />
          {!!questions && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{questions}</Text>
            </View>
          )}
        </Pressable>
      </View>
      <Flyout
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 30,
        }}
        isOpen={shotFlyout}
        onDismiss={() => {
          setShotFlyout(false);
        }}
        role="tooltip"
        showMode="transient-with-dismiss-on-pointer-move-away"
        target={buttonRef.current}
        placement="right">
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 5,
            backgroundColor: '#111214',
            position: 'absolute',
            zIndex: 1,
            left: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: '700', fontSize: 15}}>
            {name ?? 'Rocketseat'}
          </Text>
        </View>
      </Flyout>
    </>
  );
}

const channelsItemDotSize = 9;
const serverItemSize = 50;
const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
  },
  serverItem: {
    height: serverItemSize,
    width: serverItemSize,
    borderRadius: serverItemSize / 2,
    backgroundColor: COLORS.grey_300,
    alignSelf: 'center',
    marginVertical: 4,
  },
  channelsItemDot: {
    height: channelsItemDotSize,
    width: channelsItemDotSize / 2,
    borderTopEndRadius: channelsItemDotSize / 2,
    borderBottomEndRadius: channelsItemDotSize / 2,
    backgroundColor: COLORS.white,
    marginRight: 12,
    top: 23,
    left: 0,
    position: 'absolute',
  },
  badge: {
    paddingHorizontal: 3,
    borderRadius: 9,
    backgroundColor: '#F23F42',
    borderWidth: 4,
    borderColor: '#1E1F22',
    position: 'absolute',
    bottom: -3,
    right: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
  },
});
