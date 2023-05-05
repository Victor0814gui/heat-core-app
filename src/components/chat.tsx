import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import { FONTS } from '../theme';


export function Chat() {
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <FlatList
          data={new Array(30).fill({ e: 1 })}
          renderItem={({ item, index }) => (
            <View style={styles.messageContainer}>
              <Image
                style={styles.imageAvatar}
                source={{ uri: "https://discord.com/assets/3c6ccb83716d1e4fb91d3082f6b21d77.png" }}
              />
              <View style={styles.messageContent}>
                <Text style={styles.messageContentNickname}>Criar novas mensagens requerem contextos mais complexos de filtros</Text>
                <Text style={styles.messageContentText}>Criar novas mensagens requerem contextos mais complexos de filtros</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onFocus={(e) => console.log("focus")}
          onBlur={(e) => console.log("blur")}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const imageAvatarSize = 40;


const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    flexDirection: "column",
    padding: 12,
  },
  container: {
    flex: 1,
  },
  messageContainer: {
    flexDirection: "row",
    paddingVertical: 7,
  },
  imageAvatar: {
    height: imageAvatarSize,
    width: imageAvatarSize,
    borderRadius: imageAvatarSize / 2,
    marginRight: 12,
  },
  messageContent: {
    justifyContent: "space-between",
  },
  messageContentNickname: {
    fontFamily: FONTS.Roboto.Medium,
  },
  messageContentText: {
    fontFamily: FONTS.Roboto.Regular,
  },
  inputContainer: {
    maxHeight: 41,
    flex: 1,
  },
  input: {
    borderColor: "#383a40"
  },
})