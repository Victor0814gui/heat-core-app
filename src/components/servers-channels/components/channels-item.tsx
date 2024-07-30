import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {COLORS} from '../../../theme';

import {Item} from '../components/item';
import {channels} from '../../../mocks/messages';

type ChannelsItemProps = {
  item: any;
  index: number;
};

export function ChannelsItem({id}: {id: number}) {
  const roomData = channels[id];

  const renderItemServer = (props: ChannelsItemProps) => <Item {...props} />;

  return (
    <View style={styles.channelsItem}>
      <View style={styles.channelsItemHeader}>
        <Text style={styles.channelsItemText}>╭──[🚀] NEXT LEVEL WEEK</Text>
      </View>
      <View style={styles.channelsItemContent}>
        <FlatList data={roomData.salas} renderItem={renderItemServer} />
      </View>
    </View>
  );
}

const channelsItemDotSize = 10;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    width: 270,
    backgroundColor: COLORS.grey_180,
    zIndex: 999,
    elevation: 100,
    position: 'relative',
  },
  headerTop: {
    position: 'absolute',
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
    fontWeight: '600',
  },
  channelsItem: {
    marginVertical: 4,
  },
  activeNowContainer: {},
  channelsItemHeader: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
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
    fontWeight: '600',
  },
  channelsItemContent: {
    justifyContent: 'center',
  },
  channelContent: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
  },
  channelContentIcon: {
    marginRight: 7,
  },
  channelContentText: {
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: '600',
  },
  nickname: {
    fontSize: 12,
    fontWeight: '600',

    color: '#b9b9b9',
  },
  icon: {
    height: 22,
    width: 22,
  },
});
