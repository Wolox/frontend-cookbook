import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Selector from './index';

describe('Selector', () => {
  const options = [
    { id: 1, text: 'Opción 1', disabled: false },
    { id: 2, text: 'Opción 2', disabled: true },
    { id: 3, text: 'Opción 3', disabled: false }
  ];
  const active = null;
  const handleChange = jest.fn();
  beforeEach(() => {
    render(<Selector options={options} active={active} handleChange={handleChange} />);
  });
  test('call handleChange function with the option id', () => {
    userEvent.click(screen.getByText('Opción 1'));
    expect(handleChange).toHaveBeenCalledWith(1);
  });
  test('can not select a disabled option', () => {
    userEvent.click(screen.getByText('Opción 2'));
    expect(handleChange).not.toHaveBeenCalled();
  });
});
