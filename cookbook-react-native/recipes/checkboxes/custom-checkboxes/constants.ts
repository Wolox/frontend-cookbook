import { TextProps, ViewStyle } from 'react-native';

export interface CustomCheckboxesProps<T> {
  title: string;
  options: Array<T>,
  defaultValue?: T,
  multioption?: boolean;
  disabledOptions?: Array<T>;
  onChange?: () => void;
  error?: string;
  checkboxContainerStyle?: ViewStyle;
  checkboxStyle?: ViewStyle;
  checkboxTextProps?: TextProps;
  style?: ViewStyle;
}
