import styles from './styles';

const CALENDAR_MAIN = 'stylesheet.calendar.main';
const CALENDAR_HEADER = 'stylesheet.calendar.header';
const CALENDAR_DAY = 'stylesheet.day.basic';

export const MAX_DATE_MONTH = 3;
export const TEN_VALUE = 10;

export const CALENDAR_THEME = {
  [CALENDAR_MAIN]: {
    container: styles.calendar,
    monthView: styles.monthView,
    week: styles.weekContainer
  },
  [CALENDAR_HEADER]: {
    header: styles.header,
    dayHeader: styles.dayHeader,
    monthText: styles.monthText
  },
  [CALENDAR_DAY]: {
    todayText: styles.todayText,
    disabledText: styles.disabledText,
    text: styles.text
  }
};
