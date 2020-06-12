import { StyleSheet, ViewStyle, Platform } from 'react-native';

import { shadowColor } from './constants/colors';
import { scale } from './utils/scaleUtils';
import { SIZES, BORDER_WIDTH } from './constants/dimentions';
import { NumberObject } from './constants/interfaces';

const ICON_SIZE = 20;
const DEFAULT_BTN_HEIGHT = scale(40);
const BIG_BTN_HEIGHT = scale(48);
const BORDER_RADIUS = 10;

const COMMON_PROPS_CONTAINERS: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: scale(30),
  height: DEFAULT_BTN_HEIGHT
};

export const GENERAL_BOX_SHADOW = {
  ...Platform.select({
    ios: {
      shadowColor: shadowColor,
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
    borderRadius: BIG_BTN_HEIGHT / 2
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
