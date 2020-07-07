import { StyleSheet } from 'react-native';
import { transparentBlack } from '@constants/colors';

const MEDIUM_PADDING = 20;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: transparentBlack,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: MEDIUM_PADDING
  },
  outsideModal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
