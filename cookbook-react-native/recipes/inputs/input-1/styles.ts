import { StyleSheet } from 'react-native';
import fonts from './config/fonts';
import { primaryColor, gray, darkGray, red } from './constants/colors';
import { SIZES } from './constants/fonts';

export default StyleSheet.create({
  container: {
    marginBottom: 5
  },
  withAnimatedLabel: {
    marginTop: 20
  },
  multilineContainer: {
    borderColor: darkGray,
    borderWidth: 1,
    height: 75,
    paddingHorizontal: 5
  },
  inputContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: darkGray,
    flexDirection: 'row',
    height: 25,
    justifyContent: 'space-between'
  },
  bottomBorderFocused: {
    borderColor: primaryColor
  },
  bottomBorderError: {
    borderColor: red
  },
  bottomBorderDisabled: {
    borderColor: gray
  },
  inputStyle: {
    ...fonts.baseFont,
    fontSize: SIZES.SMALL,
    color: darkGray,
    padding: 0,
    margin: 0
  },
  singleInput: {
    flex: 1
  },
  errorContainer: {
    height: 15,
    marginTop: 3
  }
});
