import { gray } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  contentContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fill: {
    width: '100%',
    height: '100%',
  },
  spinner: {
    position: 'absolute',
    height: '100%'
  }
});

export default styles;
