import { StyleSheet, ViewStyle, Platform } from 'react-native';
import { scale } from '@utils/scalingUtils';
import { NumberObject } from '@interfaces/globalInterfaces';
import { gray } from '@constants/colors';

import { SIZES, BORDER_WIDTH } from './constants';

const ICON_SIZE = 20;
const BTN_HEIGHT = {
  DEFAULT: scale(40),
  BIG: scale(48)
};
const BORDER_RADIUS = 10;

const COMMON_PROPS_CONTAINERS: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 30,
  height: BTN_HEIGHT.DEFAULT
};

export const GENERAL_BOX_SHADOW = {
  ...Platform.select({
    ios: {
      shadowColor: gray,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 10
    },
    android: {
      elevation: 4
    }
  })
};

const getSizes = (sizesObj: NumberObject) =>
  Object.keys(sizesObj).reduce(
    (sizes, size) => ({ ...sizes, ...{ [size]: { minWidth: sizesObj[size] } } }),
    {}
  );

export default StyleSheet.create({
  container: {
    ...COMMON_PROPS_CONTAINERS,
    borderRadius: BORDER_RADIUS,
    minWidth: SIZES.SMALL,
    borderWidth: BORDER_WIDTH.BOLD
  },
  bigContainer: {
    borderRadius: BTN_HEIGHT.BIG / 2
  },
  containerLoading: {
    ...COMMON_PROPS_CONTAINERS
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    marginRight: 8
  },
  borderless: {
    borderWidth: BORDER_WIDTH.NONE,
    width: 'auto'
  },
  ...getSizes({
    small: SIZES.SMALL,
    medium: SIZES.MEDIUM,
    large: SIZES.LARGE
  })
});
