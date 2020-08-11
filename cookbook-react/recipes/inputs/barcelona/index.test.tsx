import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, queryByAttribute }  from '@testing-library/react';

import Input from '.';

const getById = queryByAttribute.bind(null, 'data-testid');

describe('Barcelona Input', () => {
  const staticProps = { label: 'My Label', placeholder: 'Some Placeholder', name: "email"  }

  describe('when input is confirmable and there is no error', () => {
    const component = <Input {...staticProps} />;

    it('shows a valid input content', () => {
      const instance = TestRenderer.create(component)
      expect(instance.toJSON()!).toMatchSnapshot();
    })

    it('does not show the error message', () => {
      const { container } = render(component);
      expect(getById(container, 'email-error')?.classList).not.toContain('show');
    })

    it('shows the valid icon', () => {
      const { container } = render(component);
      expect(getById(container, 'email-valid-icon')).not.toBeNull;
    })

    it('shows the input as valid', () => {
      const { container } = render(component);
      expect(getById(container, 'email-input')?.classList).toContain('confirmed');
    })
  });

  describe('when input is confirmable and there is an error', () => {
    const component = <Input {...staticProps} error="Some error" />;

    it('shows an invalid input content', () => {
      const instance = TestRenderer.create(component)
      expect(instance.toJSON()!).toMatchSnapshot();
    })

    it('shows the error message', () => {
      const { container } = render(component);
      expect(getById(container, 'email-error')?.classList).toContain('show');
    })

    it('shows the valid icon', () => {
      const { container } = render(component);
      expect(getById(container, 'email-invalid-icon')).not.toBeNull;
    })
  });

  describe('when input is not confirmable and there is no error', () => {
    const component = <Input {...staticProps} confirmable={false} />;

    it('shows an invalid input content', () => {
      const instance = TestRenderer.create(component)
      expect(instance.toJSON()!).toMatchSnapshot();
    })

    it('does not show the error message', () => {
      const { container } = render(component);
      expect(getById(container, 'email-error')?.classList).not.toContain('show');
    })
  });

  describe('when input is not confirmable and there is an error', () => {
    const component = <Input {...staticProps} confirmable={false} error="Some error" />;

    it('shows an invalid input content', () => {
      const instance = TestRenderer.create(component)
      expect(instance.toJSON()).toMatchSnapshot();
    })
    
    it('shows the error message', () => {
      const { container } = render(component);
      expect(getById(container, 'email-error')?.classList).toContain('show');
    })

    it('shows the valid icon', () => {
      const { container } = render(component);
      expect(getById(container, 'email-invalid-icon')).not.toBeNull;
    })
  });

  describe('when the input is disabled', () => {
    const component = <Input {...staticProps} disabled={true} />;
    const { container } = render(component);

    it('shows the input as disabled', () => {
      expect(getById(container, 'email-input')?.getAttribute('disabled')).toBeTruthy;
    })
  })
})
