


import React, { useRef, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../theme';
import { useWindowDimensions } from 'react-native-windows';

const ListHeaderComponent = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.header, { width }]}>
      <Image
        source={require("../assets/5463a80eb8187cf8796d3db0a2e01bbc.webp")}
        style={[styles.headerImage,]}
      />
    </View>
  )
}

export function ServersChannels() {
  const [isScrolled, setIsScrolled] = useState(true)
  const scrollRef = useRef<FlatList>(null);

  const onScroll = (e: number) => {
    setIsScrolled(e > 120);
  }

  const renderItem = () => (
    <View style={styles.channelsItem}>
      <View style={styles.channelsItemHeader}>
        <Text style={styles.channelsItemText}>╭──[🚀] NEXT LEVEL WEEK</Text>
      </View>
      <View style={styles.channelsItemContent}>
        {new Array(10).fill({ e: 1 }).map((e, index) => (
          <View key={index} style={styles.channelContent}>
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
      <View style={[
        styles.headerTop,
        isScrolled && { backgroundColor: COLORS.grey_180, },
      ]}>
        <Text style={styles.headerText}>Rocketseat</Text>
        <Image source={require("../assets/arrow.svg")} />
      </View>
      <FlatList
        onScroll={(e) => onScroll(e.nativeEvent.contentOffset.y)}
        ref={scrollRef}
        data={new Array(10).fill({ e: 1 })}
        ListHeaderComponent={ListHeaderComponent}
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
})