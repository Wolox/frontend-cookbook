import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Example from './index';

test('renders the example correctly', () => {
  const { container } = render(<Example />);
  expect(container).toMatchSnapshot();
});

test('can click example 1', () => {
  render(<Example />);
  const tab = screen.getAllByText('Opción 3')[0];
  userEvent.click(tab);
  expect(tab).toHaveClass('active');
});

test('can click example 2', () => {
  render(<Example />);
  const tab = screen.getAllByText('Opción 3')[1];
  userEvent.click(tab);
  expect(tab).toHaveClass('active');
});

test('can click external button in example 2', () => {
  render(<Example />);
  const option1Tab = screen.getAllByText('Opción 1')[1];
  const option2Tab = screen.getAllByText('Opción 2')[1];
  const option3Tab = screen.getAllByText('Opción 3')[1];
  const button = screen.getByText('Go to next tab');

  expect(option1Tab).not.toHaveClass('active');
  expect(option2Tab).toHaveClass('active');
  expect(option3Tab).not.toHaveClass('active');

  userEvent.click(button);

  expect(option1Tab).not.toHaveClass('active');
  expect(option2Tab).not.toHaveClass('active');
  expect(option3Tab).toHaveClass('active');

  userEvent.click(button);

  expect(option1Tab).toHaveClass('active');
  expect(option2Tab).not.toHaveClass('active');
  expect(option3Tab).not.toHaveClass('active');
});

test('can click example 3', () => {
  render(<Example />);
  const tab = screen.getAllByText('Opción 2')[2];
  userEvent.click(tab);
  expect(tab).toHaveClass('active');
});
