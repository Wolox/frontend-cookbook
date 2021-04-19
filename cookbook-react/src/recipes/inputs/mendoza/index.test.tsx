import React from 'react';
import { render } from '@testing-library/react';

import Example from '.';

test('Should match snapshot', () => {
  const { container } = render(<Example />);
  expect(container).toMatchSnapshot();
});
