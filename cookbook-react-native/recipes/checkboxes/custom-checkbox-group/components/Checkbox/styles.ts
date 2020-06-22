import { StyleSheet } from 'react-native';
import { scale } from '@utils/scalingUtils';
import { white } from '@constants/colors';

const ICON_SIZE = scale(10);
const CONTAINER_SIZE = scale(16);
const BORDER_RADIUS = 4;
const BORDER_WIDTH = 2;

export default StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  iconContainer: {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    borderRadius: BORDER_RADIUS,
    borderWidth: BORDER_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: white
  }
});
