import React from 'react';

import { getDisplayName } from '.';

const myComponent: React.ComponentType<Record<string, unknown>> = () => <div />;

test('returns a the components name if it doesnt have a displayName', () => {
  expect(getDisplayName<Record<string, unknown>>(myComponent)).toBe('myComponent');
});

test('returns the displayName if it has one', () => {
  myComponent.displayName = 'My Component displayName';
  expect(getDisplayName<Record<string, unknown>>(myComponent)).toBe(myComponent.displayName);
});
