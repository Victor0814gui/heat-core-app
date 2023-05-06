import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from '../components/navbar';
import { COLORS } from '../theme';
import { ServersChannels } from '../components/servers-channels';
import { Chat } from '../components/chat';
import { PeoplesProfile } from '../components/peoples-profile';
import { Header } from '../components/header';


export function HemeScreen() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ServersChannels />
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Chat />
          <PeoplesProfile />
        </View>
      </View>

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