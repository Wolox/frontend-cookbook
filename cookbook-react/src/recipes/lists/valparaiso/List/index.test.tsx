import React from 'react';
import { render, screen } from '@testing-library/react';

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
