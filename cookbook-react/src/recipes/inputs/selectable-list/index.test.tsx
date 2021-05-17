import React from 'react';
import { render } from '@testing-library/react';

import SelectableListExample from '.';

test('Should match snapshot', () => {
  const { container } = render(<SelectableListExample />);
  expect(container).toMatchSnapshot();
});
