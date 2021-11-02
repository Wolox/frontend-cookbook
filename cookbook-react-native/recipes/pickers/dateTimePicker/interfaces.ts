import {
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  ViewStyle
} from 'react-native';

export interface IDateTimePicker {
  accessibilityLabel: string;
  styleModal?: ViewStyle;
  styleContainer?: ViewStyle;
  mode?: 'date' | 'time' | 'datetime';
  is24hs: boolean;
  setDate?: Function;
  setHour?: Function;
  styleBtn?: ViewStyle;
  styleTextBtn?: TextStyle;
  textButton?: string;
  onPressButton?: Function;
  onPressConfirm?: Function;
  onPressCancel?: Function;
  icon?: ImageSourcePropType;
  styleIcon?: ImageStyle;
  hourFormat?: 'toLocaleTimeString' | 'toISOString';
  confirmTextIOS?: string;
  cancelTextIOS?: string;
}

export interface ITouchButton {
  styleBtn?: ViewStyle;
  showDatePicker?: () => void;
  icon?: ImageSourcePropType;
  styleIcon?: ImageStyle;
  styleTextBtn?: TextStyle;
  textButton?: string;
}
