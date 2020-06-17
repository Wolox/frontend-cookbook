import { TouchableOpacityProps, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { CustomTextVariants } from '@textsRecipes/custom-text/constants';

export const VARIANTS = ['borderless', 'radial', 'black', 'green', 'white', 'gray'];

interface CustomButtonVariants {
  borderless?: boolean;
  radial?: boolean;
  black?: boolean;
}

export interface CustomButtonProps extends CustomTextVariants, CustomButtonVariants {
  onPress: TouchableOpacityProps['onPress'];
  activeOpacity?: number;
  disabled?: boolean;
  icon?: number;
  iconStyle?: ImageStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
}

export const OPACITY = {
  DEFAULT: 0.7
};
