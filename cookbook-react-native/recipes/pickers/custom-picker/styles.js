import { StyleSheet } from 'react-native';
import { gray, white } from '@constants/colors';
import { MONTSERRAT, SIZES } from '@constants/fonts';
import { WINDOW_WIDTH } from '@constants/platform';
import { verticalScale } from '@utils/scalingUtils';

export const itemStyleConfig = {
  itemTextSize: SIZES.MEDIUM,
  itemTextFontFamily: MONTSERRAT,
  selectedItemTextFontFamily: MONTSERRAT,
  hideIndicator: true
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end'
  },
  container: {
    width: WINDOW_WIDTH,
    height: 300,
    backgroundColor: white
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomColor: gray,
    borderBottomWidth: 1
  },
  picker: {
    width: '100%',
    height: verticalScale(200)
  }
});

export default styles;
