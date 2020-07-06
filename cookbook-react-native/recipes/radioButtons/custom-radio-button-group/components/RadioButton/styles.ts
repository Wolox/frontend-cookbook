import { StyleSheet } from 'react-native';
import { scale } from '@utils/scalingUtils';
import { darkGray, blue } from '@constants/colors';

const CONTAINER_SIZE = scale(16);
const BORDER_RADIUS = 10;
const BORDER_WIDTH = 2;

export default StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  option: {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    borderRadius: BORDER_RADIUS,
    borderWidth: BORDER_WIDTH,
    borderColor: darkGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  optionSelected: {
    borderColor: blue,
    borderWidth: 5
  }
});
