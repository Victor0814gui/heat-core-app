import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme';
import {channelsItemDotSize, serverItemSize} from './circle.constants';

export const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
  },
  serverItem: {
    height: serverItemSize,
    width: serverItemSize,
    borderRadius: serverItemSize / 2,
    backgroundColor: COLORS.grey_300,
    alignSelf: 'center',
    marginVertical: 4,
  },
  channelsItemDot: {
    height: channelsItemDotSize,
    width: channelsItemDotSize / 2,
    borderTopEndRadius: channelsItemDotSize / 2,
    borderBottomEndRadius: channelsItemDotSize / 2,
    backgroundColor: COLORS.white,
    marginRight: 12,
    top: 23,
    left: 0,
    position: 'absolute',
  },
  badge: {
    paddingHorizontal: 3,
    borderRadius: 9,
    backgroundColor: '#F23F42',
    borderWidth: 4,
    borderColor: '#1E1F22',
    position: 'absolute',
    bottom: -3,
    right: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
  },
});
