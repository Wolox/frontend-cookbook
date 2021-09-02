import momentLib from 'moment';
import 'moment/locale/es';
import moment from 'moment-timezone';
import i18next from 'i18next';
import { DELTA_TOKEN_EXPIRATION } from '@constants/time';
import { capitalize } from '@utils/stringUtils';

const TIMEZONE = 'America/Argentina/Buenos_Aires';
const MAX_LENGTH_WEEK_DAY = 3;

export const localesCalendar = {
  es: {
    monthNames: moment.months().map(capitalize),
    monthNamesShort: moment.monthsShort(),
    dayNames: moment.weekdays(),
    dayNamesShort: moment.weekdaysShort().map(weekday => capitalize(weekday).substr(0, MAX_LENGTH_WEEK_DAY)),
    today: i18next.t('REQUEST_APPOINTMENT:TODAY')
  }
};

export const argentinaMoment = (date?: string | number) => moment.tz(date, TIMEZONE);

export const formatDate = (date: string | number, withTime?: boolean, separator?: string) =>
  argentinaMoment(date).format(`DD · MM · YYYY${withTime ? ` [${separator}] HH:mm[hs]` : ''}`);

export const formatShortDate = (date: string) => argentinaMoment(date).format('MM/YYYY');

export const formatLongDate = (date: string) => (date ? argentinaMoment(date).format('DD/MM/YYYY') : '');

export const formatCalendarDate = (date: string) => argentinaMoment(date).format('YYYY-MM-DD');

export const formatDateAppointment = (date: string | number, withTime?: boolean) => {
  const dateMoment = momentLib(date);
  return `${capitalize(dateMoment.format('ddd'))} ${dateMoment.format('DD [de]')} ${dateMoment.format(
    'MMMM'
  )}${withTime ? dateMoment.format('[,] HH:mm [h.]') : ''}`;
};

export const formatDateAppointmentPreview = (date: string | number) => {
  const dateMoment = momentLib(date);
  return `${dateMoment.format('DD [de]')} ${capitalize(dateMoment.format('MMMM'))}`;
};

export const formatLongDateAppointment = (date: string | number) => {
  const dateMoment = momentLib(date);
  return `${capitalize(dateMoment.format('dddd'))} ${dateMoment.format('DD [de]')} ${dateMoment.format(
    'MMMM'
  )}`;
};

export const formatHourAppointment = (date: string | number) => argentinaMoment(date).format('HH:mm');

export const getCurrentDate = (format: string = 'YYYY-MM-DD'): string => argentinaMoment().format(format);

export const CURRENT_MONTH = parseInt(getCurrentDate('M'), 10);
export const CURRENT_DAY = parseInt(getCurrentDate('D'), 10);

export const getMonthsLater = (months: number): string =>
  argentinaMoment().add(months, 'months').format('YYYY-MM-DD');

export const isAfterNow = (date: string | number) => argentinaMoment(date).isAfter(Date.now());

export const isBeforeNow = (date: string | number) => argentinaMoment(date).isBefore(Date.now());

// Added a time delta (10 minutes) to have a time lapse to avoid errors
export const isTokenExpired = (expirationTime: number) =>
  moment(expirationTime).isBefore(Date.now() + DELTA_TOKEN_EXPIRATION);

export const getPatientAge = (date: string) => moment().diff(date, 'years', false);

export const getRemainingValidityDays = (date: string | number) => {
  const inputDate = argentinaMoment(date).startOf('day');
  const nowDate = argentinaMoment().startOf('day');
  return inputDate.diff(nowDate, 'days', false);
};
