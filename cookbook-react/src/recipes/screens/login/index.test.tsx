import React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Login from './index';

jest.mock('i18next', () => ({
  t: (key: string) => key
}));

const mockSetStateUser = jest.fn();
const mockSetPersistantUser = jest.fn();

jest.mock('app/contexts/UserContext/reducer', () => ({
  actionCreators: {
    setUser: (values: any) => mockSetStateUser(values)
  }
}));

jest.mock('services/AuthServices', () => ({
  login: () =>
    new Promise((resolve) =>
      resolve({
        ok: true,
        data: { sessionToken: 'token', id: 1234 },
        problem: null,
        originalError: null
      })
    ),
  setCurrentUser: (values: any) => mockSetPersistantUser(values)
}));

global.MutationObserver = window.MutationObserver;

describe('#Login', () => {
  const component = <Login />;

  describe('when mounting', () => {
    it('shows valid content', () => {
      const instance = TestRenderer.create(component);
      expect(instance.toJSON()!).toMatchSnapshot();
    });
  });

  describe('when filling invalid fields without submitting', () => {
    it('does not show the field errors', async () => {
      const { container, getByLabelText } = render(component);
      const email = getByLabelText('Login:email');

      await fireEvent.change(email, { target: { value: 'invalid email' } });

      expect(container.innerHTML).not.toMatch('Login:emailFormatError');
    });
  });

  describe('when filling invalid email and no password and submitting', () => {
    it('shows the field errors', async () => {
      const { container, getByRole, getByLabelText } = render(component);
      const email = getByLabelText('Login:email');
      const form = getByRole('form', { name: 'login-form' });

      await fireEvent.change(email, { target: { value: 'invalid email' } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(container.innerHTML).toMatch('Login:emailFormatError');
      expect(container.innerHTML).toMatch('Login:required');
    });
  });

  describe('when empty email and no password and submitting', () => {
    it('shows the field errors', async () => {
      const { container, getByRole } = render(component);
      const form = getByRole('form', { name: 'login-form' });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(container.innerHTML).toMatch('Login:required');
    });
  });

  describe('when valid email and password', () => {
    it('executes the request and saves user', async () => {
      const { getByRole, getByLabelText } = render(component);
      const email = getByLabelText('Login:email');
      const password = getByLabelText('Login:password');
      const form = getByRole('form', { name: 'login-form' });
      await fireEvent.change(email, { target: { value: 'someone@wolox.com' } });
      await fireEvent.change(password, { target: { value: 'myPassword' } });

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => fireEvent.submit(form));

      expect(mockSetStateUser).toHaveBeenCalledWith({ sessionToken: 'token', id: 1234 });
      expect(mockSetPersistantUser).toHaveBeenCalledWith({ sessionToken: 'token', id: 1234 });
    });
  });
});
