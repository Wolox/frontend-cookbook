import {
  IpickerVisibility,
  ISetDate,
  ISetHour,
  IHourFormat,
  IMode
} from './interfaces';

const toLocaleTimeString: string = 'toLocaleTimeString';
const toISOString: string = 'toISOString';

export const FULL_HOUR = (is24hs: boolean) => (is24hs ? 'en_GB' : '');

export const hideDatePicker = (setDatePickerVisibility: IpickerVisibility) => {
  setDatePickerVisibility(false);
};

export const changeDate = (
  date: Date,
  mode: IMode,
  hourFormat: IHourFormat,
  setHour?: ISetHour,
  setDate?: ISetDate
) => {
  switch (mode) {
    case 'time':
      switch (hourFormat) {
        case toISOString:
          if (setHour) setHour(date.toISOString());
          break;
        case toLocaleTimeString:
          if (setHour) setHour(date.toLocaleTimeString());
          break;
        default:
          if (setHour) setHour(date);
          break;
      }
      break;
    case 'date':
      if (setDate) setDate(date);
      break;
    default:
      if (setDate) setDate(date);
      break;
  }
};
