import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TabBar from './index';

const tabs = [
  { id: 1, label: 'Primera tab', icon: '' },
  { id: 2, label: 'Segunda tab', icon: '' }
];
const active = null;
const handleChange = jest.fn();

test('call handleChange function with the tab id', () => {
  render(<TabBar tabs={tabs} active={active} handleChange={handleChange} />);
  userEvent.click(screen.getByLabelText('Primera tab'));
  expect(handleChange).toHaveBeenCalledWith(1);
});
