import React, {useCallback, useRef, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

import SettingIconSvg from '../../assets/settings.svg';
import MicrophoneIconSvg from '../../assets/microphone.svg';
import HeadphoneIconSvg from '../../assets/headphone.svg';
import ArrowSvg from '../../assets/arrow.svg';

import {ProfileModal} from '../profile';
import {Item} from './components/item';
import {Header} from './components/header';
import {ButtonWrapper} from './components/button-wrapper';
import {channels} from '../../mocks/messages';
import {ChannelsItem} from './components/channels-item';

type ServerItemProps = {
  item: any;
  index: number;
};

export function ServersChannels({id}: {id: number}) {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const scrollRef = useRef<FlatList>(null);
  const modalRef = useRef(null);

  const roomData = channels[id];

  const onScroll = (e: number) => {
    setIsScrolled(e > 120);
  };

  const renderItem = useCallback(() => <ChannelsItem id={id} />, [id]);

  return (
    <View style={styles.container}>
      <ProfileModal
        isOpen={isOpen}
        //@ts-ignore
        target={modalRef.current}
        showMode="transient-with-dismiss-on-pointer-move-away"
        onDismiss={() => {
          setIsOpen(false);
          console.log('onDimiss');
        }}
      />
      <View
        style={[
          styles.headerTop,
          isScrolled && {backgroundColor: COLORS.grey_180},
        ]}>
        <Text style={styles.headerText}>{roomData.nome}</Text>
        <Image source={ArrowSvg} style={{borderTopLeftRadius: 12}} />
      </View>
      <FlatList
        ref={scrollRef}
        onScroll={e => onScroll(e.nativeEvent.contentOffset.y)}
        showsVerticalScrollIndicator={false}
        data={new Array(3).fill({e: 1})}
        ListHeaderComponent={Header}
        renderItem={renderItem}
      />
      <View style={styles.footer}>
        <View ref={modalRef} style={{marginRight: 'auto'}}>
          <ButtonWrapper onPress={() => setIsOpen(true)}>
            <Image
              style={styles.imageAvatar}
              source={{
                uri: 'https://discord.com/assets/3c6ccb83716d1e4fb91d3082f6b21d77.png',
              }}
            />
            <View style={{marginLeft: 7, paddingRight: 12}}>
              <Text numberOfLines={1} style={styles.name}>
                Guilherme
              </Text>
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
