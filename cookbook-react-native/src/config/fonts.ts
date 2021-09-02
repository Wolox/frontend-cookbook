import { fontMaker } from '@utils/fontUtils';
import { darkGray, mediumGray } from '@constants/colors';

import { SEMIBOLD, BOLD, ITALIC, SIZES } from '../constants/fonts';

// Here you can make your custom fonts
// I only recommend using family if you have more than one Font Family in the App.
export default {
  baseFont: fontMaker({ size: SIZES.MEDIUM, color: darkGray }),
  baseItalicFont: fontMaker({ size: SIZES.MEDIUM, color: darkGray, style: ITALIC }),
  semiBoldFont: fontMaker({ weight: SEMIBOLD, size: SIZES.MEDIUM, color: darkGray }),
  boldFont: fontMaker({ weight: BOLD, size: SIZES.MEDIUM, color: darkGray }),
  buttonFont: fontMaker({ weight: BOLD }),
  labelFont: fontMaker({ size: SIZES.XSMALL, color: mediumGray }),
  smallLabelFont: fontMaker({ weight: SEMIBOLD, size: SIZES.SMALL, color: mediumGray })
};
