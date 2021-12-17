import React from 'react';

import CustomDateTimePicker from '@pickersRecipes/dateTimePicker';

import renderer from 'react-test-renderer';

describe(' CustomDateTimePicker', () => {
  test('to match snapshot', () => {
    const component = renderer
      .create(<CustomDateTimePicker accessibilityLabel={''} is24hs={false} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
