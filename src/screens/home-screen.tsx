import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from '../components/navbar';
import { COLORS } from '../theme';
import { ServersChannels } from '../components/servers-channels';
import { Chat } from '../components/chat';
import { PeoplesProfile } from '../components/peoples-profile';
import { Header } from '../components/header';
import { SelectRoomContextProvider } from '../contexts/select-room';
import { ProfileModal } from '../components/profile';


export function HomeScreen({ navigation, route }: any) {
  const id = route.params.itemId;
  return (
    <View style={styles.container}>
      <SelectRoomContextProvider>
        <ServersChannels id={id} />
        <View style={{ flex: 1 }}>
          <Header id={id} />
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Chat />
            <PeoplesProfile />
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
    backgroundColor: COLORS.grey_210,
  }
})