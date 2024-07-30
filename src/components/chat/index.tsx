import React, {memo} from 'react';
import {View, Text, FlatList, TextInput, StyleSheet, Image} from 'react-native';
import {FONTS} from '../../theme';
import {messages} from '../../mocks/messages';
import {Message} from './components/message';

type MessageProps = {
  item: any;
  index: number;
};

export function Chat() {
  const renderItem = (props: MessageProps) => <Message {...props} />;
  const keyExtractor = (_: any, index: number) => `${index}`;

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={21}
          maxToRenderPerBatch={10}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/add.svg')} style={styles.icon} />
        <TextInput
          onFocus={e => console.log('focus')}
          onBlur={e => console.log('blur')}
          style={styles.input}
          placeholder="Conversar #💬  geral"
          multiline
        />
        <Image
          source={require('../assets/figurines.svg')}
          style={styles.icon}
        />
        <Image source={require('../assets/gif.svg')} style={styles.icon} />
        <Image source={require('../assets/gift.svg')} style={styles.icon} />
        <Text style={styles.icon}>🤔</Text>
      </View>
    </View>
  );
}

const imageAvatarSize = 40;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 12,
    position: 'relative',
    zIndex: 99,
  },
  container: {
    flex: 1,
  },
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
  messageContentNickname: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 16,
    color: '#f2f2f2',
  },
  hourText: {
    fontSize: 12,
    color: '#7f8584',
  },
  messageContentText: {
    fontFamily: FONTS.Roboto.Medium,
    fontSize: 14,
    color: '#b5b7b9',
    // fontWeight: "500",
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
