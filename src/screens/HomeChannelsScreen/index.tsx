import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../theme';

import {Header} from '../../components/header';
import {Peoples} from './components/Peoples';
import {Chat} from './components/Chat';

export function HomeChannelsScreen({route}: any) {
  const id = route.params.itemId;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Header id={id} />
        <View style={{flexDirection: 'row', flex: 1}}>
          <Chat />
          <Peoples />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.grey_210,
  },
});
