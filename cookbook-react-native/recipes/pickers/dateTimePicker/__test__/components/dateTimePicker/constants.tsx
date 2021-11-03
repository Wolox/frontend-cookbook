import {
  FULL_HOUR,
  changeDate,
  hideDatePicker
} from '@pickersRecipes/dateTimePicker/constants';

describe('FULL_HOUR', () => {
  test('return true value', () => {
    const expectReturn = 'en_GB';
    const response = FULL_HOUR(true);
    expect(response).toBe(expectReturn);
    expect(response).not.toBeNull();
  });
  test('return false value', () => {
    const expectReturn = '';
    const response = FULL_HOUR(false);
    expect(response).toBe(expectReturn);
    expect(response).not.toBeNull();
  });
  test('return blank value', () => {
    const expectReturn = '';
    const response = FULL_HOUR();
    expect(response).toBe(expectReturn);
  });
});

describe('hideDatePicker', () => {
  test('calledDatePickerVisibility', () => {
    const setDatePickerVisibility = jest.fn();
    hideDatePicker(setDatePickerVisibility);
    expect(setDatePickerVisibility).toBeCalled();
    expect(setDatePickerVisibility).not.toBeNull();
  });
  test('throw hidepicker', () => {
    expect(() => {
      hideDatePicker();
    }).toThrow('setDatePickerVisibility is not a functio');
  });
});

describe('changeDate', () => {
  const setHour = jest.fn();
  const setDate = jest.fn();
  const date = new Date();
  const hourFormat = 'toISOString';
  const dateMode = 'date';
  const hourMode = 'time';
  test('setDateCalled', () => {
    changeDate(date, dateMode, hourFormat, setHour, setDate);
    expect(setDate).toBeCalled();
    expect(changeDate).not.toBeNull();
  });
  test('setHourCalled', () => {
    changeDate(date, hourMode, hourFormat, setHour, setDate);
    expect(setHour).toBeCalled();
    expect(changeDate).not.toBeNull();
  });
  test('mode is undefined', () => {
    changeDate(date, undefined, hourFormat, setHour, setDate);
    expect(changeDate).not.toBeNull();
    expect(setDate).toBeCalled();
  });
  test('hourFormat is undefined', () => {
    changeDate(date, undefined, undefined, setHour, setDate);
    expect(changeDate).not.toBeNull();
    expect(changeDate).not.toThrowError();
  });
  test('setHour is undefined', () => {
    changeDate(date, undefined, hourFormat, undefined, setDate);
    expect(changeDate).not.toBeNull();
    expect(setDate).toBeCalled();
    expect(changeDate).not.toThrowError();
  });
  test('setDate is undefined', () => {
    changeDate(date, undefined, hourFormat, setHour, undefined);
    expect(changeDate).not.toBeNull();
    expect(setHour).toBeCalled();
    expect(changeDate).not.toThrowError();
  });
  test('all params were undefined', () => {
    changeDate(undefined, undefined, undefined, undefined, undefined);
    expect(changeDate).not.toThrowError();
    expect(changeDate).not.toBeNull();
  });
});
