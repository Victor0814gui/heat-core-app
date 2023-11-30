


import React, { memo, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, FONTS } from '../../theme';
import { useSelectRoomContextProvider } from '../../contexts/select-room';
import ChangeSvg from "../../assets/channel.svg"
import { GestureResponderEvent } from 'react-native';
import { Modal } from '../modal';

type ServerItemProps = {
  item: any;
  index: number;
}

type OnTouchStartProps = GestureResponderEvent;

export const ServerItem = memo(({ item, index }: ServerItemProps) => {
  const [textChange, setTextChange] = useState(false)
  const { setId } = useSelectRoomContextProvider();

  const onTouchStart = (props: OnTouchStartProps) => {

    console.log(props.nativeEvent);

    //@ts-ignore
    if (props.nativeEvent?.isRightButton) {
      setTextChange(true)
    }
    //@ts-ignore

    if (props.nativeEvent?.isLeftButton) {
      setTextChange(false)
    }
  }

  return (
    <>
      {textChange && <Modal />}
      <Pressable onTouchStart={onTouchStart} onPress={() => setId(index < 2 ? index : 0)} key={index} style={styles.channelContent}>
        <View style={styles.channelsItemDot} />
        <Image style={styles.channelContentIcon} source={ChangeSvg} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.channelContentText}>{textChange ? item + "mouse right" : item}</Text>
      </Pressable>
    </>
  )
})

const channelsItemDotSize = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 270,
    minWidth: 200,
    backgroundColor: COLORS.grey_180,
  },
  list: {
  },
  header: {
    position: "relative",
    marginBottom: 12,
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
  headerImage: {
    flex: 1,
    width: 270,
    minWidth: 200,
    maxHeight: 200,
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
  buttonWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: COLORS.grey_180,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    minHeight: 30,
    minWidth: 30,
    marginHorizontal: 2,
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