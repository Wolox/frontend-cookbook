import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import i18next from 'i18next';

import './i18n';
import styles from './style';
import { ITouchButton } from './interfaces';

const toLocaleTimeString: string = 'toLocaleTimeString';
const toISOString: string = 'toISOString';

export const FULL_HOUR = (is24hs: boolean) => (is24hs ? 'en_GB' : '');

export const hideDatePicker = (setDatePickerVisibility: Function) => {
  setDatePickerVisibility(false);
};

export const TouchButton = ({
  styleBtn,
  showDatePicker,
  icon,
  styleIcon,
  styleTextBtn,
  textButton
}: ITouchButton) => (
  <TouchableOpacity
    style={[styles.defaultButtonStyle, styleBtn]}
    onPress={showDatePicker}>
    {icon ? (
      <Image
        source={icon}
        style={[styles.defaultIcon, styleIcon]}
        resizeMode="cover"
        resizeMethod="scale"
      />
    ) : (
      <Text style={[styles.defaultTextBtn, styleTextBtn]}>
        {textButton || i18next.t('CUSTOM_DATETIME_PICKER:OPEN')}
      </Text>
    )}
  </TouchableOpacity>
);

export const changeDate = (
  date: Date,
  mode: 'date' | 'time' | 'datetime' | undefined,
  hourFormat: 'toLocaleTimeString' | 'toISOString' | undefined,
  setHour: Function | undefined,
  setDate: Function | undefined
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
