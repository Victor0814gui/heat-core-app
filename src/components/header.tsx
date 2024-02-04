import React from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {FONTS} from '../theme';
import {channels} from '../mocks/messages';

export function Header({id}: {id: number}) {
  const roomData = channels[id];

  return (
    <View style={styles.container}>
      <Image
        style={{marginHorizontal: 8, height: 24, width: 24}}
        source={require('../assets/channel.svg')}
      />
      <Text style={styles.channelTitle}>topics</Text>
      <Text numberOfLines={1} style={styles.channelDescription}>
        {roomData.descricao}
      </Text>
      <View style={styles.chnnelActions}>
        <Image
          style={styles.icon}
          source={require('../assets/notification.svg')}
        />
        <Image style={styles.icon} source={require('../assets/peoples.svg')} />
        <Image style={styles.icon} source={require('../assets/topics.svg')} />
        <Image style={styles.icon} source={require('../assets/fix.svg')} />
        <View style={styles.inputContainer}>
          <TextInput placeholder="buscar" style={styles.input} />
          <Image style={styles.icon} source={require('../assets/search.svg')} />
        </View>
        <Image style={styles.icon} source={require('../assets/inbox.svg')} />
        <Image style={styles.icon} source={require('../assets/help.svg')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 40,
    backgroundColor: '#313338',
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#2c2e33',
  },
  chnnelActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  channelTitle: {
    fontFamily: FONTS.Roboto.Black,
    fontSize: 15,
  },
  channelDescription: {
    fontFamily: FONTS.Roboto.Black,
    fontSize: 15,
  },
  icon: {
    marginHorizontal: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1f22',
  },
  input: {
    height: '100%',
    width: 120,
    fontFamily: FONTS.Roboto.Medium,
    borderColor: '#1e1f22',
    backgroundColor: '#1e1f22',
  },
});
