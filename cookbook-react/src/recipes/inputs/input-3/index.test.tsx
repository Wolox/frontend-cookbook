import React from 'react';
import { render } from '@testing-library/react';

import Input from './index';

describe('Input-3', () => {
  test('match snapshot', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  test('Input is disabled', async () => {
    const props = { label: 'Label', disabled: true, error: '' };
    const { findByRole } = render(<Input {...props} />);

    const inputElement = await findByRole('textbox');
    const disabledAttribute = inputElement?.getAttribute('disabled');

    expect(disabledAttribute).not.toBe(null);
    expect(disabledAttribute).not.toBe(false);
  });

  test('shows the error message', () => {
    const props = { label: 'Label', disabled: true, error: 'Some error' };
    const { getByRole } = render(<Input {...props} />);

    const errorElement = getByRole('alert');

    expect(errorElement).toBeInTheDocument();
  });
});
