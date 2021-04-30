import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Input from '.';

jest.mock('i18next', () => ({
  t: (key: string) => key
}));

describe('Barcelona Input', () => {
  const staticProps = { label: 'My Label', placeholder: 'Some Placeholder', name: 'email' };

  describe('when input is confirmable and there is no error', () => {
    const component = <Input {...staticProps} />;

    it('shows a valid input content', () => {
      const instance = TestRenderer.create(component);
      expect(instance.toJSON()!).toMatchSnapshot();
    });

    it('does not show the error message', () => {
      const { getByRole } = render(component);
      const errorElement = getByRole('alert');
      expect(errorElement).not.toHaveClass('show');
    });

    it('shows the valid icon', () => {
      const { getByRole } = render(component);
      const validStatusElement = getByRole('status', { name: 'Input:valid' });
      expect(validStatusElement).not.toBeNull();
    });

    it('shows the input as valid', () => {
      const { getByRole } = render(component);
      const inputElement = getByRole('textbox');
      expect(inputElement).toHaveClass('confirmed');
      expect(inputElement).not.toHaveClass('inputError');
    });
  });

  describe('when input is confirmable and there is an error', () => {
    const component = <Input {...staticProps} error="Some error" />;

    it('shows an invalid input content', () => {
      const instance = TestRenderer.create(component);
      expect(instance.toJSON()!).toMatchSnapshot();
    });

    it('shows the error message', () => {
      const { getByRole } = render(component);
      const errorElement = getByRole('alert');
      expect(errorElement).toHaveClass('show');
    });

    it('shows the invalid icon', () => {
      const { getByRole } = render(component);
      const validStatusElement = getByRole('status', { name: 'Input:invalid' });
      expect(validStatusElement).not.toBeNull();
    });

    it('shows the input as invalid', () => {
      const { getByRole } = render(component);
      const errorElement = getByRole('textbox');
      expect(errorElement).not.toHaveClass('confirmed');
      expect(errorElement).toHaveClass('inputError');
    });
  });

  describe('when input is not confirmable and there is no error', () => {
    const component = <Input {...staticProps} confirmable={false} />;

    it('shows an invalid input content', () => {
      const instance = TestRenderer.create(component);
      expect(instance.toJSON()!).toMatchSnapshot();
    });

    it('does not show the error message', () => {
      const { getByRole } = render(component);
      const errorElement = getByRole('alert');
      expect(errorElement).not.toHaveClass('show');
    });
  });

  describe('when input is not confirmable and there is an error', () => {
    const component = <Input {...staticProps} confirmable={false} error="Some error" />;

    it('shows an invalid input content', () => {
      const instance = TestRenderer.create(component);
      expect(instance.toJSON()).toMatchSnapshot();
    });

    it('shows the error message', () => {
      const { getByRole } = render(component);
      const errorElement = getByRole('alert');
      expect(errorElement).toHaveClass('show');
    });

    it('shows the invalid icon', () => {
      const { getByRole } = render(component);
      const validStatusElement = getByRole('status', { name: 'Input:invalid' });
      expect(validStatusElement).not.toBeNull();
    });
  });

  describe('when the input is disabled', () => {
    const component = <Input {...staticProps} disabled />;

    it('shows the input as disabled', async () => {
      const { findByRole } = render(component);

      const inputElement = await findByRole('textbox');
      const disabledAttribute = inputElement?.getAttribute('disabled');

      expect(disabledAttribute).not.toBe(null);
      expect(disabledAttribute).not.toBe(false);
    });
  });
});
