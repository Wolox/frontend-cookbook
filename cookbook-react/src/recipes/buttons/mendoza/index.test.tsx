import React from 'react';
import { render } from '@testing-library/react';

import ButtonExample from './index';

test('render component', () => {
  const { container } = render(<ButtonExample />);
  expect(container).toMatchSnapshot();
});
