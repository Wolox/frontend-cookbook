import { render } from '@testing-library/react';
import React from 'react';

import Loading from './loading';

test('renders correctly', () => {
  const { container } = render(<Loading />);
  expect(container.firstChild).toMatchSnapshot();
});
