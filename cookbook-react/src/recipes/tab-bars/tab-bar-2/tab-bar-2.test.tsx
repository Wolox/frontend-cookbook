import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TabBar from './index';

const tabs = [
  { id: 1, label: 'Primera tab', icon: ':D' },
  { id: 2, label: 'Segunda tab', icon: ':C' }
];
const active = null;
const handleChange = jest.fn();

describe('test tab-bar component', () => {
  test('match to the snapshot', () => {
    const { container } = render(<TabBar tabs={tabs} active={active} handleChange={handleChange} />);
    expect(container).toMatchSnapshot();
  });

  test('call handleChange function with the tab id', () => {
    render(<TabBar tabs={tabs} active={active} handleChange={handleChange} />);
    userEvent.click(screen.getByLabelText('Primera tab'));
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  test('show first tab icon', () => {
    render(<TabBar tabs={tabs} active={active} handleChange={handleChange} />);
    const icon = screen.getByRole('icon-1');
    expect(icon).toBeInTheDocument();
  });

  test('select second tab', () => {
    render(<TabBar tabs={tabs} active={active} handleChange={handleChange} />);
    const tabElement = screen.getByLabelText('Segunda tab') as HTMLInputElement;
    fireEvent.change(tabElement, { target: { value: 2 } });
    expect(tabElement.value).toBe('2');
  });
});
