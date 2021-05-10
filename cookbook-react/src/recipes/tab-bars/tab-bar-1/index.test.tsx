import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TabBar from './index';

describe('Tab-bar-1', () => {
  const options = [
    { id: 1, label: 'Sección 1' },
    { id: 2, label: 'Sección 2' },
    { id: 3, label: 'Sección 3' }
  ];

  test('match snapshot ', () => {
    const { container } = render(<TabBar options={options} />);
    expect(container).toMatchSnapshot();
  });

  test('select second tab', () => {
    render(<TabBar options={options} />);
    const tabElement = screen.getByText('Sección 2');

    userEvent.click(tabElement);

    expect(tabElement).toHaveClass('selected');
  });
});
