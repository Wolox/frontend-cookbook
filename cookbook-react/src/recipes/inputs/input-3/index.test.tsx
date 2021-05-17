import React from 'react';
import { render } from '@testing-library/react';

import Input from './index';

describe('Input-3', () => {
  test('match snapshot', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  test('Input is disabled', async () => {
    const { findByRole } = render(<Input label="Label" error="" disabled />);

    const inputElement = await findByRole('textbox');

    expect(inputElement).toHaveAttribute('disabled');
  });

  test('shows the error message', () => {
    const { getByRole } = render(<Input label="Label" error="Some error" disabled />);

    const errorElement = getByRole('alert');

    expect(errorElement).toBeInTheDocument();
  });
});
