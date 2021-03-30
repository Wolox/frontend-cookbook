import React from 'react';
import { fireEvent, render, within, waitFor } from '@testing-library/react';

import List from './index';

const LOCATIONS_MOCK = [
  {
    id: 2,
    name: 'Antofagasta',
    country: 'Chile',
    cities: [
      {
        id: 1,
        name: 'Antofagasta',
        zipcode: '02101'
      },
      {
        id: 5,
        name: 'Calama',
        zipcode: '02201'
      },
      {
        id: 9,
        name: 'María Elena',
        zipcode: '02302'
      },
      {
        id: 2,
        name: 'Mejillones',
        zipcode: '02102'
      },
      {
        id: 6,
        name: 'Ollague',
        zipcode: '02202'
      },
      {
        id: 7,
        name: 'San Pedro de Atacama',
        zipcode: '02203'
      },
      {
        id: 3,
        name: 'Sierra Gorda',
        zipcode: '02103'
      },
      {
        id: 4,
        name: 'Taltal',
        zipcode: '02104'
      },
      {
        id: 8,
        name: 'Tocopilla',
        zipcode: '02301'
      }
    ]
  },
  {
    id: 14,
    name: 'Arica y Parinacota',
    country: 'Chile',
    cities: [
      {
        id: 331,
        name: 'Arica',
        zipcode: '15101'
      },
      {
        id: 332,
        name: 'Camarones',
        zipcode: '15102'
      },
      {
        id: 335,
        name: 'General Lagos',
        zipcode: '15202'
      },
      {
        id: 334,
        name: 'Putre',
        zipcode: '15201'
      }
    ]
  }
];

describe('List component', () => {
  const handleDelete = jest.fn();

  it('renders without crashing', () => {
    const { getAllByRole, getByText } = render(<List title="The List" items={LOCATIONS_MOCK} />);

    expect(getAllByRole('listitem')).toHaveLength(LOCATIONS_MOCK.length);
    expect(getByText(/The List/i)).toBeInTheDocument();
  });

  it('delete the first row', async () => {
    const { getAllByRole } = render(
      <List title="The List" items={LOCATIONS_MOCK} handleDelete={handleDelete} />
    );

    const listItems = getAllByRole('listitem');
    const firstRow = within(listItems[0]);

    fireEvent.click(firstRow.getByTestId('delete-button'));

    await waitFor(() => expect(handleDelete).toHaveBeenCalled());
  });
});
