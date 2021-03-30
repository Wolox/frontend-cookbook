import React from 'react';
import { render } from '@testing-library/react';

import { getColumns } from './utils';
import { data } from './constants';

import Table from './index';

describe('Table component', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Table columns={getColumns()} data={data} emptyMessage="" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
