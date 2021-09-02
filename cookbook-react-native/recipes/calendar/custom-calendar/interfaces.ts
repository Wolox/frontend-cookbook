export interface Date {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
}

export interface Theme {
  calendarBackground?: string;
  textSectionTitleColor?: string;
  textSectionTitleDisabledColor?: string;
  selectedDayBackgroundColor?: string;
  selectedDayTextColor?: string;
  todayTextColor?: string;
  dayTextColor?: string;
  textDisabledColor?: string;
  dotColor?: string;
  selectedDotColor?: string;
  monthTextColor?: string;
  indicatorColor?: string;
  textDayFontWeight?: string;
  textMonthFontWeight?: string;
  textDayHeaderFontWeight?: string;
  textDayFontSize?: number;
  textMonthFontSize?: number;
  textDayHeaderFontSize?: number;
}
