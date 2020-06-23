import { TouchableOpacityProps, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { CustomTextVariants } from '@textsRecipes/custom-text/constants';

export const VARIANTS = ['borderless', 'radial', 'black', 'green', 'white', 'gray'];

interface CustomButtonVariants {
  black?: boolean;
  borderless?: boolean;
  radial?: boolean;
}

export interface CustomButtonProps extends CustomTextVariants, CustomButtonVariants {
  activeOpacity?: number;
  disabled?: boolean;
  icon?: number;
  iconStyle?: ImageStyle;
  onPress: TouchableOpacityProps['onPress'];
  style?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
}

export const OPACITY = {
  DEFAULT: 0.7
};
