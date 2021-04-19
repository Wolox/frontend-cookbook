import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SelectableItem from '.';

const item = { id: 'first_item', title: 'First item', subtitle: 'Small', price: 100 };

describe('when the selectable item is a radio', () => {
  test('Should match snapshot', () => {
    const { container } = render(<SelectableItem onChange={jest.fn()} selected={false} item={item} type="radio" />);
    expect(container).toMatchSnapshot();
  });
});

describe('when the selectable item is a checkbox', () => {
  test('Should match snapshot', () => {
    const { container } = render(<SelectableItem onChange={jest.fn()} selected={false} item={item} type="checkbox" />);
    expect(container).toMatchSnapshot();
  });
});

describe('when user interacts with the element', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    render(<SelectableItem onChange={handleChange} selected={false} item={item} type="checkbox" />);
  });

  test('When user selects the element the callback is called', () => {
    const selectableItem = screen.getByLabelText('First item') as HTMLInputElement;
    userEvent.click(selectableItem);
    expect(handleChange).toHaveBeenCalled();
  });
});

describe('when item is is not selected', () => {
  beforeEach(() => {
    render(<SelectableItem onChange={jest.fn()} selected={false} item={item} type="checkbox" />);
  });

  test('When user selects the element the callback is called', () => {
    const selectableItem = screen.getByLabelText('First item') as HTMLInputElement;
    expect(selectableItem.checked).toBe(false);
  });
});

describe('when item is is not selected', () => {
  beforeEach(() => {
    render(<SelectableItem onChange={jest.fn()} selected item={item} type="checkbox" />);
  });

  test('When user selects the element the callback is called', () => {
    const selectableItem = screen.getByLabelText('First item') as HTMLInputElement;
    expect(selectableItem.checked).toBe(true);
  });
});
