import React from 'react';
import renderer from 'react-test-renderer';
import {
  FULL_HOUR,
  TouchButton,
  changeDate
} from '@pickersRecipes/dateTimePicker/constants';

describe('FULL_HOUR', () => {
  test('return correct value', () => {
    const expectReturn = 'en_GB';
    const response = FULL_HOUR(true);
    expect(response).toBe(expectReturn);
  });
});

describe('TouchButton', () => {
  test('to match snapshot', () => {
    const component = renderer.create(<TouchButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('changeDate', () => {
  test('setDateCalled', () => {
    const setHour = jest.fn();
    const setDate = jest.fn();
    const date = new Date();
    const hourFormat = 'toISOString';
    const mode = 'date';
    changeDate(date, mode, hourFormat, setHour, setDate);
    expect(setDate).toBeCalled();
    expect(changeDate).not.toBeNull();
  });
});
