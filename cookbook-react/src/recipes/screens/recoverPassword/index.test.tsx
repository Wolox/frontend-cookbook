import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RecoverPassword from '.';

test('renders the component when mounted', () => {
  const { container } = render(<RecoverPassword />);
  expect(container.firstChild).toMatchSnapshot();
});

test('changes email correctly', () => {
  const email = 'example@wolox.com';
  render(<RecoverPassword />);
  const emailInput = screen.getByLabelText('RecoverPassword:email');
  userEvent.type(emailInput, email);

  const submitButton = screen.getByText('RecoverPassword:enter');
  userEvent.click(submitButton);

  // TODO: Expect something when the handleSubmit is implemented
});
