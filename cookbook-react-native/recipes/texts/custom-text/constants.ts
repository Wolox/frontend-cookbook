import { ReactNode } from 'react';
import { TextProps, TextStyle, StyleProp } from 'react-native';

/*
 ** TODO: You can add styles to Base like Family Font to be the Text styles base!
 ** if you want to add a custom style, you need to add it here and in VARIANTS
 */

export const VARIANTS = [
  'semiBold',
  'bold',
  'italic',
  'center',
  'justify',
  'right',
  'blue',
  'gray',
  'green',
  'white',
  'darkGray',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'xmedium',
  'big',
  'xbig',
  'error'
];

export interface CustomTextVariants {
  semiBold?: boolean;
  bold?: boolean;
  italic?: boolean;
  center?: boolean;
  justify?: boolean;
  right?: boolean;
  blue?: boolean;
  gray?: boolean;
  green?: boolean;
  white?: boolean;
  darkGray?: boolean;
  xxsmall?: boolean;
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  xmedium?: boolean;
  big?: boolean;
  xbig?: boolean;
  error?: boolean;
}

export interface CustomTextProps extends CustomTextVariants {
  children: ReactNode;
  textProps?: TextProps;
  style?: StyleProp<TextStyle>;
}
