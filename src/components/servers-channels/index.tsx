


import React, { ReactNode, memo, useRef, useState } from 'react';
import { View, Text, Image, PressableProps, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
import { Pressable, useWindowDimensions } from 'react-native-windows';
import { salasDoDiscord } from '../navbar';
import { useSelectRoomContextProvider } from '../../contexts/select-room';

import SettingIconSvg from "../../assets/settings.svg"
import MicrophoneIconSvg from "../../assets/microphone.svg"
import HeadphoneIconSvg from "../../assets/headphone.svg"
import ArrowSvg from "../../assets/arrow.svg"

import { ProfileModal } from '../profile';
import { ServerItem } from './server-item';
import { ListHeaderComponent } from './server-list-header';
import { ButtonWrapper } from './button-wrapper';

type ServerItemProps = {
  item: any;
  index: number;
}

export function ServersChannels({ id }: { id: number }) {
  const [isScrolled, setIsScrolled] = useState(true)
  const [isOpen, setIsOpen] = useState(true)
  const scrollRef = useRef<FlatList>(null);
  const modalRef = useRef(null);

  const roomData = salasDoDiscord[id];

  const onScroll = (e: number) => {
    setIsScrolled(e > 120);
  }

  const renderItemServer = (props: ServerItemProps) => <ServerItem {...props} />

  const renderItem = () => (
    <View style={styles.channelsItem}>
      <View style={styles.channelsItemHeader}>
        <Text style={styles.channelsItemText}>╭──[🚀] NEXT LEVEL WEEK</Text>
      </View>
      <View style={styles.channelsItemContent}>
        <FlatList
          data={roomData.salas}
          renderItem={renderItemServer}
        />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <ProfileModal
        isOpen={isOpen}
        //@ts-ignore
        target={modalRef.current}
        onDismiss={() => {
          setIsOpen(false);
          console.log("onDimiss")
        }}
      />
      <View style={[
        styles.headerTop,
        isScrolled && { backgroundColor: COLORS.grey_180, },
      ]}>
        <Text style={styles.headerText}>{roomData.nome}</Text>
        <Image source={ArrowSvg} />
      </View>
      <FlatList
        onScroll={(e) => onScroll(e.nativeEvent.contentOffset.y)}
        ref={scrollRef}
        data={new Array(3).fill({ e: 1 })}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
      />
      <View style={styles.footer}>
        <View ref={modalRef} style={{ marginRight: "auto" }}>
          <ButtonWrapper onPress={() => setIsOpen(true)}>
            <Image
              style={styles.imageAvatar}
              source={{ uri: "https://discord.com/assets/3c6ccb83716d1e4fb91d3082f6b21d77.png" }}
            />
            <View style={{ marginLeft: 7, paddingRight: 12, }}>
              <Text numberOfLines={1} style={styles.name}>Guilherme</Text>
              <Text style={styles.nickname}>Disponivel</Text>
            </View>
          </ButtonWrapper>
        </View>

        <ButtonWrapper>
          <Image source={MicrophoneIconSvg} style={styles.icon} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Image source={HeadphoneIconSvg} style={styles.icon} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Image source={SettingIconSvg} style={styles.icon} />
        </ButtonWrapper>
      </View>
    </View>
  );
}

const channelsItemDotSize = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 270,
    minWidth: 200,
    backgroundColor: COLORS.grey_180,
  },
  headerTop: {
    position: "absolute",
    padding: 12,
    height: 51,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.Roboto.Bold,
  },
  channelsItem: {
    marginVertical: 4,
  },
  channelsItemHeader: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  channelsItemDot: {
    height: channelsItemDotSize,
    width: channelsItemDotSize / 2,
    borderTopEndRadius: channelsItemDotSize / 2,
    borderBottomEndRadius: channelsItemDotSize / 2,
    backgroundColor: COLORS.white,
    marginRight: 12,
  },
  channelsItemText: {
    marginLeft: 12,
    marginVertical: 7,
    fontSize: 12,
    fontFamily: FONTS.Roboto.Medium,
  },
  channelsItemContent: {
    justifyContent: "center",
  },
  channelContent: {
    flexDirection: "row",
    paddingVertical: 4,
    alignItems: "center",
  },
  channelContentIcon: {
    marginRight: 7
  },
  channelContentText: {
    fontSize: 14,
    fontFamily: FONTS.Roboto.Regular,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 7,
  },
  imageAvatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  name: {
    fontSize: 14,
    fontFamily: FONTS.Poppins.Medium,
  },
  nickname: {
    fontSize: 12,
    fontFamily: FONTS.Poppins.Medium,
    color: "#b9b9b9"
  },
  icon: {
    height: 22,
    width: 22,
  },
})