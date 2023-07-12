import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

import AnimatedLottieView from 'lottie-react-native';
import { ANIMATIONS } from '../utils';
import { SelectRoomContextProvider } from '../contexts/select-room';
import { ServersChannels } from '../components/servers-channels';
import { Header } from '../components/header';

export function PrivateConversationsScreen({ navigation }: any) {


  return (
    <View style={styles.container}>
      <SelectRoomContextProvider>
        <ServersChannels id={0} />
        <View style={{ flex: 1 }}>
          {/* <Header id={0} /> */}
          <View style={styles.content}>
            <AnimatedLottieView
              source={ANIMATIONS.Search}
              autoPlay={true}
              loop={true}
              resizeMode='contain'
              style={styles.animation}
            />
          </View>
        </View>
      </SelectRoomContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.grey_210,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    height: 220,
    width: 220,
  }
})