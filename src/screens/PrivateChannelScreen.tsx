import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {COLORS} from '../theme';

import AnimatedLottieView from 'lottie-react-native';
import {ANIMATIONS} from '../utils';
import {SelectRoomContextProvider} from '../contexts/select-room';
import {ServersChannels} from '../components/servers-channels';
// import {pickDirectory} from 'react-native-document-picker';

export function PrivateChannelScreen({navigation}: any) {
  const onPress = async () => {
    try {
      // const response = await pickDirectory();
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <SelectRoomContextProvider>
        {/* <ServersChannels id={0} /> */}
        <View style={{flex: 1}}>
          {/* <Header id={0} /> */}
          <Button title="abrir arquivos" onPress={onPress} />
          <View style={styles.content}>
            <AnimatedLottieView
              source={ANIMATIONS.HandHoldingEmerald}
              autoPlay={true}
              loop={true}
              resizeMode="contain"
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.grey_210,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    height: 220,
    width: 220,
  },
});
