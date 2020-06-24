import { StyleSheet } from 'react-native';
import { scale } from '@utils/scalingUtils';

export const errorTextProps = {
  numberOfLines: 1
};

export default StyleSheet.create({
  title: {
    margin: 10
  },
  errorContainer: {
    height: scale(40),
    justifyContent: 'center'
  }
});
