import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useWindowDimensions} from 'react-native-windows';

import ThumbnailImage from '../../../assets/5463a80eb8187cf8796d3db0a2e01bbc.webp';

export const Header = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.header, {width}]}>
      <Image source={ThumbnailImage} style={[styles.headerImage]} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    marginBottom: 12,
  },
  headerImage: {
    flex: 1,
    width: 270,
    minWidth: 200,
    maxHeight: 200,
  },
});
