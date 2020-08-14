import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, queryByAttribute }  from '@testing-library/react';

import Input from '.';

jest.mock('i18next', () => ({
  t: (key: string) => key
}));

describe('Barcelona Input', () => {
  const staticProps = { label: 'My Label', placeholder: 'Some Placeholder', name: 'email'  }

  describe('when input is confirmable and there is no error', () => {
    const component = <Input {...staticProps} />;

    it('shows a valid input content', () => {
      const instance = TestRenderer.create(component)
      expect(instance.toJSON()!).toMatchSnapshot();
    })

    it('does not show the error message', async () => {
      const { getByRole } = render(component);
      const errorElement = await getByRole('alert');
      expect(errorElement?.classList).not.toContain('show');
    })

    it('shows the valid icon', async () => {
      const { getByRole } = render(component);
      const validStatusElement = await getByRole('status', { name: 'Input:valid' });
      expect(validStatusElement).not.toBeNull();
    })

    it('shows the input as valid', async () => {
      const { getByRole } = render(component);
      const inputElement = await getByRole('textbox');
      expect(inputElement?.classList).toContain('confirmed');
      expect(inputElement?.classList).not.toContain('inputError');
    })
  });

  describe('when input is confirmable and there is an error', () => {
    const component = <Input {...staticProps} error="Some error" />;

    it('shows an invalid input content', () => {
      const instance = TestRenderer.create(component)
      expect(instance.toJSON()!).toMatchSnapshot();
    })

    it('shows the error message', async () => {
      const { getByRole } = render(component);
      const errorElement = await getByRole('alert');
      expect(errorElement?.classList).toContain('show');
    })

    it('shows the invalid icon', async () => {
      const { getByRole } = render(component);
      const validStatusElement = await getByRole('status', { name: 'Input:invalid' });
      expect(validStatusElement).not.toBeNull();
    })

    it('shows the input as invalid', async () => {
      const { getByRole } = render(component);
      const errorElement = await getByRole('textbox');
      expect(errorElement?.classList).not.toContain('confirmed');
      expect(errorElement?.classList).toContain('inputError');
    })
  });

  describe('when input is not confirmable and there is no error', () => {
    const component = <Input {...staticProps} confirmable={false} />;

    it('shows an invalid input content', () => {
      const instance = TestRenderer.create(component)
      expect(instance.toJSON()!).toMatchSnapshot();
    })

    it('does not show the error message', async () => {
      const { getByRole } = render(component);
      const errorElement = await getByRole('alert');
      expect(errorElement?.classList).not.toContain('show');
    })
  });

  describe('when input is not confirmable and there is an error', () => {
    const component = <Input {...staticProps} confirmable={false} error="Some error" />;

    it('shows an invalid input content', () => {
      const instance = TestRenderer.create(component)
      expect(instance.toJSON()).toMatchSnapshot();
    })
    
    it('shows the error message', async () => {
      const { getByRole } = render(component);
      const errorElement = await getByRole('alert');
      expect(errorElement?.classList).toContain('show');
    })

    it('shows the invalid icon', async () => {
      const { getByRole } = render(component);
      const validStatusElement = await getByRole('status', { name: 'Input:invalid' });
      expect(validStatusElement).not.toBeNull();
    })
  });

  describe('when the input is disabled', () => {
    const component = <Input {...staticProps} disabled={true} />;

    it('shows the input as disabled', async () => {
      const { getByRole } = render(component);
      const inputElement = await getByRole('textbox');
      expect(inputElement?.getAttribute('disabled')).toBeTruthy;
    })
  })
})
