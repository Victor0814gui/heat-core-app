import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../theme';

import AnimatedLottieView from 'lottie-react-native';
import {ANIMATIONS} from '../utils';
import {screensName} from '../routes';

export function SplashAnimationScreen({navigation}: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(screensName.homeChannelsScreen, {itemId: 0});
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        source={ANIMATIONS.Splash}
        autoPlay={true}
        loop={false}
        resizeMode="contain"
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey_210,
  },
  animation: {
    height: 220,
    width: 220,
  },
});
