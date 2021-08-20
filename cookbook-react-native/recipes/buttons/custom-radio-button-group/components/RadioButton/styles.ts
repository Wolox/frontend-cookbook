import { StyleSheet } from 'react-native';
import { scale } from '@utils/scalingUtils';

const CONTAINER_SIZE = scale(16);
const BORDER_RADIUS = 10;
const BORDER_WIDTH = 2;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  circleContainer: {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    borderRadius: BORDER_RADIUS,
    borderWidth: BORDER_WIDTH,
    padding: 2
  },
  circle: {
    flex: 1,
    borderRadius: BORDER_RADIUS
  }
});
