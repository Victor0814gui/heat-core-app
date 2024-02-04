import React, {ReactNode, useState} from 'react';
import {PressableProps, StyleSheet} from 'react-native';
import {COLORS} from '../../../theme';
import {Pressable} from 'react-native-windows';

export const ButtonWrapper = (
  props: {
    children: ReactNode;
  } & PressableProps,
) => {
  const [onHover, setOnHover] = useState(false);
  const onHoverIn = () => {
    setOnHover(true);
  };
  const onHoverOut = () => {
    setOnHover(false);
  };

  return (
    <Pressable
      {...props}
      //@ts-ignore
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      style={[
        styles.buttonWrapper,
        onHover && {
          backgroundColor: COLORS.grey_300,
        },
      ]}>
      {props.children}
    </Pressable>
  );
};

const channelsItemDotSize = 10;

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: COLORS.grey_180,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    minHeight: 30,
    minWidth: 30,
    marginHorizontal: 2,
  },
});
