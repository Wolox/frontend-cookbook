import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { select, openMenu } from 'react-select-event';

import InputSelect from './index';

export const DATA = [
  {
    value: 'option1',
    label: 'Opción 1'
  },
  {
    value: 'option2',
    label: 'Opción 2'
  },
  {
    value: 'option3',
    label: 'Opción 3'
  },
  {
    value: 'option4',
    label: 'Opción 4'
  }
];

const formProvider = ({ children }) => <form name="test">{children}</form>;

const handleSearch = jest.fn();

describe('InputSelect component without button', () => {
  const label = 'input select';

  beforeEach(() => {
    render(<InputSelect name="input-select" label={label} options={DATA} onInputChange={handleSearch} />, {
      wrapper: formProvider
    });
  });

  it('renders without crashing', () => {
    expect(screen.getByRole('form')).toHaveFormValues({ 'input-select': '' });
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it('select the second option', async () => {
    await select(screen.getByLabelText(label), 'Opción 2');
    expect(screen.getByRole('form')).toHaveFormValues({ 'input-select': 'option2' });
  });

  it('search for a word', async () => {
    fireEvent.change(screen.getByLabelText(label), { target: { value: 'Opción 1' } });
    await waitFor(() => expect(handleSearch).toHaveBeenCalled());
  });

  it('open menu correctly', () => {
    expect(screen.queryByText('Opción 1')).toBeNull();
    openMenu(screen.getByLabelText(label));
    expect(screen.getByText('Opción 1')).toBeInTheDocument();
  });
});
