import { TextProps, TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface CustomTextInputProps extends TextInputProps, TextProps {
  animated?: boolean;
  disabled?: boolean;
  error?: string;
  errorContainerStyle?: ViewStyle;
  errorStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;
  inputTextStyles?: TextStyle;
  isFocused: boolean;
  label?: string;
  labelStyle?: TextStyle;
  multiline?: boolean;
  onChange?(e: any): any;
  placeholder?: string;
  placeholderColor?: string;
  secureTextEntry?: boolean;
  showError?: boolean;
  showEye?: boolean;
  style?: ViewStyle;
  value?: string;
}
