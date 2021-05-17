import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Example from '.';

beforeEach(() => {
  jest.useFakeTimers();
});

test('Should match snapshot', () => {
  const { container } = render(<Example />);
  expect(container).toMatchSnapshot();
});

test('Should match snapshot', async () => {
  render(<Example />);

  const buttons = screen.getAllByRole('button');
  const firstButton = buttons[0];

  userEvent.click(firstButton);
  await waitFor(() => jest.runAllTimers());

  expect(firstButton.style.height).toBeFalsy();
});

afterEach(() => {
  jest.useRealTimers();
});
