import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Selector from './index';

describe('Testing <Selector />', () => {
  const options = [
    { id: 1, text: 'Opción 1', disabled: false },
    { id: 2, text: 'Opción 2', disabled: true },
    { id: 3, text: 'Opción 3', disabled: false }
  ];
  beforeEach(() => {
    render(<Selector options={options} />);
  });
  test('should add selected class after click one option', () => {
    userEvent.click(screen.getByRole('button', { name: /option-1/i }));
    expect(screen.getByRole('button', { name: /option-1/i })).toHaveClass('selected');
  });
  test('can not select a disabled option', () => {
    userEvent.click(screen.getByRole('button', { name: /option-2/i }));
    expect(screen.getByRole('button', { name: /option-2/i })).not.toHaveClass('selected');
  });
});
