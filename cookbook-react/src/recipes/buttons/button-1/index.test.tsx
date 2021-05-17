import React from 'react';
import { render } from '@testing-library/react';

import Button1 from './index';

test('render component', () => {
  const { container } = render(<Button1 />);
  expect(container).toMatchSnapshot();
});
