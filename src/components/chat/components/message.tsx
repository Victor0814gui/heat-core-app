import React, {memo} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FONTS} from '../../../theme';

type MessageProps = {
  item: any;
  index: number;
};

export const Message = memo(({item, index}: MessageProps) => (
  <View style={styles.messageContainer}>
    <Image
      style={styles.imageAvatar}
      source={{
        uri: 'https://discord.com/assets/3c6ccb83716d1e4fb91d3082f6b21d77.png',
      }}
    />
    <View style={styles.messageContent}>
      <View style={styles.userInfo}>
        <Text selectable style={styles.messageContentNickname}>
          {item.author}
        </Text>
        <Text style={styles.hourText}>Hoje às 8:40</Text>
      </View>
      <Text selectable style={styles.messageContentText}>
        asjdflkjashdflkjahsdf
      </Text>
    </View>
  </View>
));

const imageAvatarSize = 40;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
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
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  messageContentNickname: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 16,
    color: '#f2f2f2',
  },
  hourText: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 12,
    color: '#7f8584',
  },
  messageContentText: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 16,
    color: '#b5b7b9',
    marginTop: 4,
  },
  inputContainer: {
    maxHeight: 240,
    flexDirection: 'row',
    paddingVertical: 7,
    backgroundColor: '#383a40',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 7,
    paddingLeft: 12,
  },
  input: {
    borderColor: '#383a40',
    flex: 1,
    fontFamily: FONTS.Roboto.Medium,
    backgroundColor: '#383a40',
  },
  icon: {
    color: '#b5b7b9',
    height: 26,
    width: 26,
    fontSize: 19,
    marginHorizontal: 7,
  },
});
