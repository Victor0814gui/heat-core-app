import React, { RefCallback, useImperativeHandle, useRef, useState } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { FONTS } from "../../theme";


import IDSvg from "../../assets/id.svg";
import DoubleArrowSvg from "../../assets/double-arrow.svg";
import { Flyout, Pressable } from "react-native-windows";
import { Modal } from "../modal";


type ProfileModalProps = {
  isOpen: boolean;
}

export const ProfileModal = React.forwardRef((props: ProfileModalProps, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flyout
      {...props}
      isLightDismissEnabled={true}
      placement="bottom-edge-aligned-left"
    >
      <Modal
        isOpen={isOpen}
        onDismiss={() => {
          setIsOpen(false)
        }}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://discord.com/assets/3c6ccb83716d1e4fb91d3082f6b21d77.png" }}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>Guilherme</Text>
          <Text style={styles.nickname}>vguilherme</Text>
          <View style={styles.separator} />
          <Text style={styles.title}>MEMBRO DO DISCORD DESDE</Text>
          <Text style={styles.text}>3 de abr. de 2021</Text>
          <View style={styles.separator} />
          <View style={styles.button}>
            <View style={styles.clienteStateCircle} />
            <Text style={styles.text}>Disponivel</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.icon}>😁</Text>
            <Pressable onPress={() => setIsOpen(true)}>
              <Text style={styles.text}>Definir status personalizado</Text>
            </Pressable>
          </View>
          <View style={styles.separator} />
          <View style={styles.button}>
            <Image source={DoubleArrowSvg} style={styles.icon} />
            <Text style={styles.text}>Mudar conta</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.button}>
            <Image source={IDSvg} style={styles.icon} />
            <Text style={styles.text}>Copiar ID do usuario</Text>
          </View>
        </View>
      </View>
    </Flyout>
  )
})

const avatarSize = 94;

const styles = StyleSheet.create({
  container: {
    width: 360,
    backgroundColor: "#232428",
    borderWidth: 1,
    borderColor: "#303135",
    position: "absolute",
    bottom: 80,
    borderRadius: 16,
    zIndex: 1,
  },
  header: {
    height: 71,
    width: "100%",
    backgroundColor: "#9945ED",
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
    borderRadius: avatarSize / 2,
    borderWidth: 7,
    borderColor: "#232428",
    position: "absolute",
    left: 20,
    top: avatarSize / 3
  },
  content: {
    borderRadius: 16,
    backgroundColor: "#111214",
    marginTop: avatarSize / 1.6,
    marginBottom: 16,
    marginHorizontal: 12,
    padding: 12,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: FONTS.Roboto.Bold,
    color: "#F2F3F5"
  },
  nickname: {
    fontSize: 13,
    fontFamily: FONTS.Poppins.Medium,
    color: "#B7BCC3"
  },
  separator: {
    flex: 1,
    maxHeight: 2,
    height: 1,
    backgroundColor: "#2E2F34",
    marginVertical: 12,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 4,
  },
  title: {
    fontFamily: FONTS.Roboto.Bold,
    color: "#F2F3F5"
  },
  text: {
    fontSize: 14,
    fontFamily: FONTS.Roboto.Medium,
    color: "#B7BCC3"
  },
  button: {
    flexDirection: "row",
    alignItems: "center"
  },
  clienteStateCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 14,
    backgroundColor: "#3ec767",
  },
})