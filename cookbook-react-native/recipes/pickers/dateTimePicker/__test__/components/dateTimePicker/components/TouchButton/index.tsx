import React from 'react';
import renderer from 'react-test-renderer';
import { TouchButton } from '@pickersRecipes/dateTimePicker/components/TouchButton';

describe('TouchButton', () => {
  test('to match snapshot', () => {
    const component = renderer.create(<TouchButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
