import React from 'react';
import { render } from '@testing-library/react';

import { StatusType } from './types';
import { statusNames } from './constants';

import StatusStep from './index';

describe('StatusStep component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<StatusStep status={StatusType.IN_PRODUCTION} />);

    expect(getByText(statusNames[StatusType.IN_PRODUCTION as StatusType])).toBeInTheDocument();
  });
});
