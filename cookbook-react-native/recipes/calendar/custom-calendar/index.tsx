import React, { useState, useMemo, useCallback } from 'react';
import { Image, ViewStyle } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import {
  CURRENT_DAY,
  CURRENT_MONTH,
  getMonthsLater,
  getCurrentDate,
  localesCalendar,
  formatCalendarDate
} from '@utils/dateUtils';

import { Date, Theme } from './interfaces';
import iconArrow from './assets/ic_general_row_arrow.png';
import { MAX_DATE_MONTH, CALENDAR_THEME, TEN_VALUE } from './constants';
import styles from './styles';

LocaleConfig.locales = localesCalendar;
LocaleConfig.defaultLocale = 'es';

interface Props {
  onPressDay: (date: string) => void;
  onPressArrowLeft: () => void;
  disableArrowLeft?: boolean;
  onPressArrowRight: () => void;
  disableArrowRight?: boolean;
  initialSelectedDay?: string;
  disabledByDefault?: boolean;
  calendarContainerStyle?: ViewStyle;
  calendarStyle?: Theme;
}

function CustomCalendar({
  onPressDay,
  onPressArrowLeft,
  onPressArrowRight,
  initialSelectedDay,
  disabledByDefault,
  calendarContainerStyle,
  calendarStyle,
  ...props
}: Props) {
  const [selectedDay, setSelectedDay] = useState<string>(initialSelectedDay || '');
  const memoizedMinDate = useMemo(() => getCurrentDate(), []);
  const memoizedMaxDate = useMemo(() => getMonthsLater(MAX_DATE_MONTH), []);
  const handlePressDay = ({ dateString }: Date) => {
    if (!disabledByDefault) {
      onPressDay(dateString);
      setSelectedDay(dateString);
    }
  };
  const handlePressArrowLeft = (substractMonth: any) => {
    substractMonth();
    onPressArrowLeft();
  };
  const handlePressArrowRight = (addMonth: any) => {
    addMonth();
    onPressArrowRight();
  };
  const handleMonthChange = useCallback(
    ({ year, month }: Date) => {
      const selectDay = month === CURRENT_MONTH ? CURRENT_DAY : 1;
      const formattedMonth = month < TEN_VALUE ? `0${month}` : month;
      const formattedDay = selectDay < TEN_VALUE ? `0${selectDay}` : selectDay;
      const dateString = formatCalendarDate(`${year}-${formattedMonth}-${formattedDay}`);
      setSelectedDay(dateString);
      onPressDay(dateString);
    },
    [onPressDay]
  );
  const renderArrow = (direction: string) => {
    const isLeft = direction === 'left';
    const { disableArrowLeft, disableArrowRight } = props;
    return (
      <Image
        source={iconArrow}
        resizeMode="contain"
        style={[
          styles.arrow,
          isLeft && styles.arrowLeft,
          isLeft && disableArrowLeft && styles.disabledArrowImage,
          !isLeft && disableArrowRight && styles.disabledArrowImage
        ]}
      />
    );
  };
  return (
    <Calendar
      {...props}
      markedDates={{
        [selectedDay as string]: {
          customStyles: {
            container: styles.selected,
            text: styles.selectedText
          }
        }
      }}
      hideExtraDays
      disableMonthChange
      disabledByDefault={disabledByDefault}
      onMonthChange={handleMonthChange}
      markingType="custom"
      theme={{...CALENDAR_THEME, ...calendarStyle }}
      renderArrow={renderArrow}
      onDayPress={handlePressDay}
      minDate={memoizedMinDate}
      maxDate={memoizedMaxDate}
      onPressArrowLeft={handlePressArrowLeft}
      onPressArrowRight={handlePressArrowRight}
      style={calendarContainerStyle}
    />
  );
}

export default CustomCalendar;
