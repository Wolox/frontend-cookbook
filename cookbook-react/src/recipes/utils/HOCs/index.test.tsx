import React from 'react';

import { getDisplayName } from '.';

test('returns a the components name if it doesnt have a displayName', () => {
  const myComponent = () => <div />;
  expect(getDisplayName<Record<string, unknown>>(myComponent)).toBe('myComponent');
});

test('returns the displayName if it has one', () => {
  // eslint-disable-next-line react/no-multi-comp
  const component = () => <div />;
  component.displayName = 'My Component displayName';
  expect(getDisplayName<Record<string, unknown>>(component)).toBe(component.displayName);
});
