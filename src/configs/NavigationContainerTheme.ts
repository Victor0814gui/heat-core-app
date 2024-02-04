import {DefaultTheme, Theme} from '@react-navigation/native';
import {COLORS} from '../theme';

export const navigationContainerTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#7A7E87',
    background: COLORS.grey_210,
  },
};
