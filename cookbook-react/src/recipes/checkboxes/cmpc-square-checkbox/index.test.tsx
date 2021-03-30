import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';

import SquareCheckbox from './index';

describe('SquareCheckbox component', () => {
  beforeEach(() => {
    render(<SquareCheckbox text="SquareCheckbox description" />);
  });

  it('renders without crashing', () => {
    expect(screen.getByLabelText(/SquareCheckbox description/)).toBeInTheDocument();
  });

  it('Toggle value when clicked', async () => {
    fireEvent.click(screen.getByLabelText(/SquareCheckbox description/));
    await waitFor(() => expect(screen.getByLabelText(/SquareCheckbox description/)).toBeChecked());

    fireEvent.click(screen.getByLabelText(/SquareCheckbox description/));
    await waitFor(() => expect(screen.getByLabelText(/SquareCheckbox description/)).not.toBeChecked());
  });
});
