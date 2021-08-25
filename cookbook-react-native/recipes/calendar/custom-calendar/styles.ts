import { StyleSheet } from 'react-native';
import { white, paleBlue, darkGray, gray, secondaryBlue } from '@constants/colors';
import { SIZES } from '@constants/fonts';
import { isAndroid } from '@constants/platform';
import fonts from '@config/fonts';
import { scale } from '@utils/scalingUtils';

const BASE_DAY_SIZE = scale(35);

export default StyleSheet.create({
  arrow: {
    tintColor: secondaryBlue
  },
  arrowLeft: {
    transform: [{ rotate: '180deg' }]
  },
  disabledArrowImage: {
    tintColor: gray
  },
  selected: {
    backgroundColor: secondaryBlue,
    alignItems: 'center',
    paddingLeft: isAndroid ? 0 : 1,
    borderRadius: BASE_DAY_SIZE / 2
  },
  selectedText: {
    ...fonts.buttonFont,
    color: white,
    fontSize: SIZES.SMALL,
    top: isAndroid ? -2 : -1
  },
  calendar: {
    padding: 20,
    backgroundColor: paleBlue
  },
  monthView: {
    backgroundColor: paleBlue
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  dayHeader: {
    ...fonts.labelFont,
    color: darkGray,
    marginBottom: 7,
    width: BASE_DAY_SIZE,
    textAlign: 'center'
  },
  monthText: {
    ...fonts.smallLabelFont,
    color: secondaryBlue
  },
  todayText: {
    ...fonts.buttonFont,
    color: secondaryBlue
  },
  disabledText: {
    color: gray
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    ...fonts.baseFont,
    marginTop: 6
  }
});
