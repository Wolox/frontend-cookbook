import { StyleSheet } from 'react-native';
import { paleBackgroundWithBorder } from '@constants/commonStyles';
import { paleGreen, paleRed, paleBlue } from '@constants/colors';
import { NATIVE_BAR_CURRENT_HEIGHT } from '@constants/platform';

export default StyleSheet.create({
  viewContainer: {
    position: 'absolute',
    top: 25,
    elevation: 1,
    marginHorizontal: 17,
    zIndex: 1
  },
  container: {
    minWidth: '100%'
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 12,
    borderRadius: 5,
    elevation: 4,
    top: NATIVE_BAR_CURRENT_HEIGHT,
    ...paleBackgroundWithBorder(paleGreen)
  },
  errorContainer: {
    ...paleBackgroundWithBorder(paleRed)
  },
  infoContainer: {
    ...paleBackgroundWithBorder(paleBlue)
  }
});
