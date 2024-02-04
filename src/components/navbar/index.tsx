import React, {useRef} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../theme';
import {Circle} from './components/circle';
import {channels} from '../../mocks/messages';
import {screensName} from '../../routes';
import {ServersChannels} from '../servers-channels';
import {channel} from '../../mocks/chennals';

export function Navbar({navigation, ...rest}: any) {
  const renderItem = ({item, index}: any) => (
    <Circle
      {...item}
      onPress={() =>
        navigation.navigate(screensName.privateChannelScreen, {itemId: index})
      }
    />
  );

  const handlerNavigateToPrivateChannel = () => {
    navigation.navigate(screensName.privateChannelScreen, {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.channels}>
        <FlatList
          data={channel}
          ListHeaderComponent={
            <Circle onPress={handlerNavigateToPrivateChannel} />
          }
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </View>
      <ServersChannels id={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey_130,
    flexDirection: 'row',
  },
  channels: {
    flex: 1,
    width: 70,
    position: 'relative',
    zIndex: 1,
    backgroundColor: COLORS.grey_130,
  },
  list: {
    zIndex: 1,
    position: 'relative',
    width: 70,
  },
  serverItem: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginVertical: 4,
    backgroundColor: COLORS.grey_300,
  },
});
