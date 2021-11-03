import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import i18next from 'i18next';

import { IDateTimePicker } from './interfaces';
import { FULL_HOUR, hideDatePicker, changeDate } from './constants';
import { TouchButton } from './components/TouchButton';
import styles from './style';
import './i18n';

export default function CustomDateTimePicker({
  accessibilityLabel,
  styleModal,
  styleBtn,
  styleTextBtn,
  styleContainer,
  mode,
  is24hs,
  setDate,
  setHour,
  textButton,
  onPressButton,
  onPressConfirm,
  onPressCancel,
  icon,
  styleIcon,
  hourFormat,
  cancelTextIOS,
  confirmTextIOS
}: IDateTimePicker) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = async () => {
    if (onPressButton) await onPressButton();
    setDatePickerVisibility(true);
  };

  const handleConfirm = async (date: Date) => {
    if (onPressConfirm) await onPressConfirm();
    changeDate(date, mode, hourFormat, setHour, setDate);
    hideDatePicker(setDatePickerVisibility);
  };
  const handleCancel = async () => {
    if (onPressCancel) await onPressCancel();
    hideDatePicker(setDatePickerVisibility);
  };

  return (
    <View
      accessibilityLabel={accessibilityLabel}
      style={[styles.defaultContainer, styleContainer]}>
      <TouchButton
        styleBtn={styleBtn}
        showDatePicker={showDatePicker}
        icon={icon}
        styleIcon={styleIcon}
        styleTextBtn={styleTextBtn}
        textButton={textButton}
      />
      <DateTimePickerModal
        style={[styles.defaultContainer, styleModal]}
        isVisible={isDatePickerVisible}
        mode={mode}
        is24Hour={is24hs}
        locale={FULL_HOUR(is24hs)}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        cancelTextIOS={
          cancelTextIOS || i18next.t('CUSTOM_DATETIME_PICKER:CANCEL')
        }
        confirmTextIOS={
          confirmTextIOS || i18next.t('CUSTOM_DATETIME_PICKER:CONFIRM')
        }
      />
    </View>
  );
}
