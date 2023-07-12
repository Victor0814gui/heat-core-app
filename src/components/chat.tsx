import React, { memo } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import { FONTS } from '../theme';
import { rooms } from './navbar';
import { useSelectRoomContextProvider } from '../contexts/select-room';
type MessageProps = {
  item: any;
  index: number;
}

const Message = memo(({ item, index }: MessageProps) => (
  <View style={styles.messageContainer}>
    <Image
      style={styles.imageAvatar}
      source={{ uri: "https://discord.com/assets/3c6ccb83716d1e4fb91d3082f6b21d77.png" }}
    />
    <View style={styles.messageContent}>
      <Text selectable style={styles.messageContentNickname}>{item.author}<Text style={styles.hourText}>Hoje às 8:40</Text></Text>
      <Text selectable style={styles.messageContentText}>{item.content}</Text>
      {/* <Text selectable style={styles.messageContentText}>Criar novas mensagens requerem contextos mais complexos de filtros</Text>
      <Text selectable style={styles.messageContentText}>Criar novas mensagens requerem contextos mais complexos de filtros</Text>
      <Text selectable style={styles.messageContentText}>Criar novas mensagens requerem contextos mais complexos de filtros</Text>
      <Text selectable style={styles.messageContentText}>Criar novas mensagens requerem contextos mais complexos de filtros</Text> */}
    </View>
  </View>
))

export function Chat() {

  const { id } = useSelectRoomContextProvider();
  const roomData = rooms[id];

  const renderItem = (props: MessageProps) => <Message {...props} />
  const keyExtractor = (_: any, index: number) => `${index}`;


  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <FlatList
          data={roomData.ansewrs}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/add.svg")} style={styles.icon} />
        <TextInput
          onFocus={(e) => console.log("focus")}
          onBlur={(e) => console.log("blur")}
          style={styles.input}
          placeholder='Conversar #💬  geral'
        />
        <Image source={require("../assets/figurines.svg")} style={styles.icon} />
        <Image source={require("../assets/gif.svg")} style={styles.icon} />
        <Image source={require("../assets/gift.svg")} style={styles.icon} />
        <Text style={styles.icon}>🤔</Text>
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
    position: "relative",
    zIndex: 99,
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
    marginRight: 16,
    marginLeft: 6,
  },
  messageContent: {
    justifyContent: "space-between",
  },
  messageContentNickname: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 16,
    color: "#f2f2f2",

  },
  hourText: {
    fontSize: 12,
    color: "#7f8584",
  },
  messageContentText: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14,
    color: "#b5b7b9",
    // fontWeight: "500",
    marginTop: 4,
  },
  inputContainer: {
    maxHeight: 41,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#383a40",
    alignItems: "center",
    borderRadius: 7,
    paddingLeft: 12,
  },
  input: {
    borderColor: "#383a40",
    flex: 1,
    fontFamily: FONTS.Roboto.Medium,
    backgroundColor: "#383a40",
  },
  icon: {
    color: "#b5b7b9",
    height: 26,
    width: 26,
    fontSize: 19,
    marginHorizontal: 7,
  },
})