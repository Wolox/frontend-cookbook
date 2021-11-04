import {
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  ViewStyle
} from 'react-native';

export type ISetHour = (hour: string | Date) => void;
export type ISetDate = (date: Date) => void;

export interface IDateTimePicker {
  accessibilityLabel: string;
  styleModal?: ViewStyle;
  styleContainer?: ViewStyle;
  mode?: 'date' | 'time' | 'datetime';
  is24hs: boolean;
  setDate?: ISetDate;
  setHour?: ISetHour;
  styleBtn?: ViewStyle;
  styleTextBtn?: TextStyle;
  textButton?: string;
  onPressButton?: () => void;
  onPressConfirm?: () => void;
  onPressCancel?: () => void;
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
export type IpickerVisibility = (isVisible: boolean) => void;

type date = 'date';
type time = 'time';
type datetime = 'datetime';
type ItoLocaleTimeString = 'toLocaleTimeString';
type ItoISOString = 'toISOString';

export type IMode = date | time | datetime | undefined;
export type IHourFormat = ItoLocaleTimeString | ItoISOString | undefined;
