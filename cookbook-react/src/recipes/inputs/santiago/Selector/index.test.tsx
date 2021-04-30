import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Selector from './index';

const options = [
  { id: 1, title: 'Opción 1', disabled: false },
  { id: 2, title: 'Opción 2', disabled: true },
  { id: 3, title: 'Opción 3', disabled: false }
];

describe('When tab is internally controlled', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    render(<Selector options={options} onChange={handleChange} />);
  });

  test('it selects a tab when user clicks it and the rest is not selected', () => {
    const tabToSelect = screen.getByText('Opción 1');
    userEvent.click(tabToSelect);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(1);
    expect(tabToSelect).toHaveClass('active');
  });

  test('can not select a disabled option', () => {
    userEvent.click(screen.getByText('Opción 2'));
    expect(handleChange).not.toHaveBeenCalled();
  });
});

describe('When tab is externally controlled', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    render(<Selector options={options} onChange={handleChange} active={1} />);
  });

  test('clicking does not select an element', () => {
    const currentSelectedTab = screen.getByText('Opción 1');
    const tabToSelect = screen.getByText('Opción 3');
    userEvent.click(tabToSelect);
    expect(currentSelectedTab).toHaveClass('active');
    expect(tabToSelect).not.toHaveClass('active');
  });

  test('can not select a disabled option', () => {
    userEvent.click(screen.getByText('Opción 2'));
    expect(handleChange).not.toHaveBeenCalled();
  });
});

describe('When the tab has initial value and it is internally controlled', () => {
  test('starts with the initial value selected', () => {
    render(<Selector options={options} onChange={jest.fn()} initialValue={3} />);
    const tab = screen.getByText('Opción 3');
    expect(tab).toHaveClass('active');
  });
});
