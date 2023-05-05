import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from '../components/navbar';
import { COLORS } from '../theme';
import { ServersChannels } from '../components/servers-channels';
import { Chat } from '../components/chat';
import { PeoplesProfile } from '../components/peoples-profile';


export function HemeScreen() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ServersChannels />
      <Chat />
      <PeoplesProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.grey_210,
  }
})