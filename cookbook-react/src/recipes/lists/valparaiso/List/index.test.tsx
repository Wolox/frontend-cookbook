import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import List from '.';

const ITEMS = [
  {
    id: 2,
    name: 'Antofagasta',
    country: 'Chile'
  },
  {
    id: 14,
    name: 'Arica y Parinacota',
    country: 'Chile'
  }
];

beforeEach(() => {
  jest.useFakeTimers();
});

test('shows the title when it exists', () => {
  const title = 'My list title';
  render(
    <List items={ITEMS} title={title}>
      {(item) => <span>{item.id}</span>}
    </List>
  );

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeVisible();
});

test('removes an element when the user clicks the remove button', async () => {
  const deleteHandler = jest.fn();
  render(
    <List items={ITEMS} onDeleteItem={deleteHandler}>
      {(item) => <span>{item.id}</span>}
    </List>
  );

  const button = screen.getAllByRole('button')[0];
  userEvent.click(button);
  await waitFor(() => jest.runAllTimers());
  expect(deleteHandler).toBeCalledWith(2);
});

afterEach(() => {
  jest.useRealTimers();
});
