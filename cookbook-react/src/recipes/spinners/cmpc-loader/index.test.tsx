import React from 'react';
import { render } from '@testing-library/react';

import Loader from './index';

describe('Loader component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Loader simple />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('has simple className if the loader is simple', () => {
    const { getByTestId } = render(<Loader simple />);

    expect(getByTestId('loader')).toHaveClass('simple');
  });
});
