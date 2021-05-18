import React from 'react';
import { render } from '@testing-library/react';

import Collapse from './index';

const title = 'Título / Pregunta / Ítem';
const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

test('renders correctly', () => {
  const { container } = render(<Collapse title={title} text={text} />);
  expect(container).toMatchSnapshot();
});
