import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Collapse from './index';

test('render component', () => {
  const { container } = render(<Collapse />);
  expect(container).toMatchSnapshot();
});

test('collapse text', () => {
  render(<Collapse />);
  const button = screen.getByRole('button');
  userEvent.click(button);
  expect(button).toHaveClass('icon-clicked');
});
