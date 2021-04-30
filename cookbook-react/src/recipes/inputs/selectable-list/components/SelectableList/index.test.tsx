import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SelectableList from '.';

const items = [
  { id: '1', name: 'first_item', label: 'First item' },
  { id: '2', name: 'second_item', label: 'Second item' },
  { id: '3', name: 'third_item', label: 'Third item' }
];

describe('when the list does not allow multiple selection and starts with no initialValues', () => {
  beforeEach(() => {
    render(
      <SelectableList items={items}>
        {({ item, type, selected, onChange }) => (
          <div key={item.id}>
            <input id={item.id} type={type} name={item.name} checked={selected} onChange={onChange} />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        )}
      </SelectableList>
    );
  });

  test('initializes with no selected elements', () => {
    const radioButtons = screen.getAllByRole('radio') as HTMLInputElement[];
    radioButtons.forEach(radio => expect(radio.checked).toBe(false));
  });

  test('selects an element when user clicks on it', () => {
    const radioButton = screen.getByLabelText('First item') as HTMLInputElement;
    userEvent.click(radioButton);
    expect(radioButton.checked).toBe(true);
  });

  test('selects an element when user clicks on its label', () => {
    const label = screen.getByText('First item') as HTMLInputElement;
    const radioButton = screen.getByLabelText('First item') as HTMLInputElement;
    userEvent.click(label);
    expect(radioButton.checked).toBe(true);
  });

  test('if an element is selected and another is selected afterwards, the previous element deselects', () => {
    const radio1 = screen.getByLabelText('First item') as HTMLInputElement;
    const radio2 = screen.getByLabelText('Second item') as HTMLInputElement;
    userEvent.click(radio1);
    userEvent.click(radio2);
    expect(radio1.checked).toBe(false);
    expect(radio2.checked).toBe(true);
  });

  test('if an element is selected and users clicks it, it remains selected', () => {
    const radio = screen.getByLabelText('First item') as HTMLInputElement;
    userEvent.click(radio);
    userEvent.click(radio);
    expect(radio.checked).toBe(true);
  });
});

describe('when the list does not allow multiple selection and starts with initialValue', () => {
  beforeEach(() => {
    render(
      <SelectableList items={items} initialValue="3">
        {({ item, type, selected, onChange }) => (
          <div key={item.id}>
            <input id={item.id} type={type} name={item.name} checked={selected} onChange={onChange} />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        )}
      </SelectableList>
    );
  });

  test('initializes with only the initial value selected', () => {
    const radioButtons = screen.getAllByRole('radio') as HTMLInputElement[];
    const selectedRadioButton = screen.getByLabelText('Third item') as HTMLInputElement;
    const amountSelected = radioButtons.reduce((result, radio) => result + (radio.checked ? 1 : 0), 0);
    expect(amountSelected).toBe(1);
    expect(selectedRadioButton.checked).toBe(true);
  });
});

describe('when the list allows multiple selection and starts with no initialValues', () => {
  beforeEach(() => {
    render(
      <SelectableList items={items} multiple>
        {({ item, type, selected, onChange }) => (
          <div key={item.id}>
            <input id={item.id} type={type} name={item.name} checked={selected} onChange={onChange} />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        )}
      </SelectableList>
    );
  });

  test('initializes with no selected elements', () => {
    const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
    checkboxes.forEach(radio => expect(radio.checked).toBe(false));
  });

  test('selects an element when user clicks on it', () => {
    const checkbox = screen.getByLabelText('First item') as HTMLInputElement;
    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test('selects an element when user clicks on its label', () => {
    const label = screen.getByText('First item') as HTMLInputElement;
    const checkbox = screen.getByLabelText('First item') as HTMLInputElement;
    userEvent.click(label);
    expect(checkbox.checked).toBe(true);
  });

  test('if an element is selected and another is selected afterwards, the previous element remains selected', () => {
    const checkbox1 = screen.getByLabelText('First item') as HTMLInputElement;
    const checkbox2 = screen.getByLabelText('Second item') as HTMLInputElement;
    userEvent.click(checkbox1);
    userEvent.click(checkbox2);
    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(true);
  });

  test('if an element is selected and users clicks it, it deselects', () => {
    const checkbox = screen.getByLabelText('First item') as HTMLInputElement;
    userEvent.click(checkbox);
    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });
});

describe('when the list has a callback for selected items', () => {
  const callback = jest.fn();
  beforeEach(() => {
    render(
      <SelectableList items={items} multiple onSelectItem={callback}>
        {({ item, type, selected, onChange }) => (
          <div key={item.id}>
            <input id={item.id} type={type} name={item.name} checked={selected} onChange={onChange} />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        )}
      </SelectableList>
    );
  });

  test('the callback is called when the item is selected', () => {
    const label = screen.getByText('First item') as HTMLInputElement;
    userEvent.click(label);
    expect(callback).toHaveBeenCalled();
  });
});
