


import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../theme';
import { Image } from 'react-native';


export function ServersChannels() {


  const renderItem = () => (
    <View style={styles.channelsItem}>
      <View style={styles.channelsItemHeader}>
        <Text style={styles.channelsItemText}>╭──[🚀] NEXT LEVEL WEEK</Text>
      </View>
      <View style={styles.channelsItemContent}>
        {new Array(10).fill({ e: 1 }).map((e, index) => (
          <View style={styles.channelContent}>
            <View style={styles.channelsItemDot} />
            <Image style={styles.channelContentIcon} source={require("../assets/channel.svg")} />
            <Text style={styles.channelContentText}>regras {index}</Text>
          </View>
        ))}
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={new Array(10).fill({ e: 1 })}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const channelsItemDotSize = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 270,
    backgroundColor: COLORS.grey_180,
  },
  list: {
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
})