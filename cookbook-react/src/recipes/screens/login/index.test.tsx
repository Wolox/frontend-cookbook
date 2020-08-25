import React from 'react';
import TestRenderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { render, fireEvent }  from '@testing-library/react';
import 'mutationobserver-shim';
import { actionCreators } from '~contexts/UserContext/reducer';
import { login, setCurrentUser } from '~services/AuthServices';

import { RootComponent } from '~utils/tests';

import Login from './index';

jest.mock('i18next', () => ({
  t: (key: string) => key
}));

const mockLogin = jest.fn();
const mockSetStateUser = jest.fn();
const mockSetPersistantUser = jest.fn();

jest.mock('~contexts/UserContext/reducer', () => ({
  actionCreators: {
    login: () => mockLogin(),
    setUser: () => mockSetStateUser()
  }
}));

jest.mock('~services/AuthServices', () => ({
  login: () => new Promise(resolve => resolve({ 
    ok: true,
    data: { sessionToken: 'token', id: 1234 },
    problem: null,
    originalError: null
  })),
  setCurrentUser: () => mockSetPersistantUser()
}))

global.MutationObserver = window.MutationObserver;

describe('#Login', () => {
  const component = <Login />;

  // describe('when mounting', () => {
  //   it('shows valid content', () => {
  //     const instance = TestRenderer.create(component)
  //     expect(instance.toJSON()!).toMatchSnapshot();
  //   })
  // });

  describe('when filling invalid fields without submitting', () => {
    it('does not show the field errors', async () => {
      const { container, getByRole, getByLabelText, rerender } = render(component);
      const email = await getByLabelText('Login:email');
      const form = await getByRole('form', { name: 'login-form' });

      await act(async () => {
        await fireEvent.change(email, { target: { value: 'invalid email' } });
      });

      expect(container.innerHTML).not.toMatch('Login:emailFormatError');
    })
  });

  describe('when filling invalid email and no password and submitting', () => {
    it('shows the field errors', async () => {
      const { container, getByRole, getByLabelText, rerender } = render(component);
      const email = await getByLabelText('Login:email');
      const form = await getByRole('form', { name: 'login-form' });

      await act(async () => {
        await fireEvent.change(email, { target: { value: 'invalid email' } });
        await fireEvent.submit(form);
      });

      expect(container.innerHTML).toMatch('Login:emailFormatError');
      expect(container.innerHTML).toMatch('Login:required');
    })
  });

  describe('when empty email and no password and submitting', () => {
    it('shows the field errors', async () => {
      const { container, getByRole, getByLabelText, rerender } = render(component);
      const email = await getByLabelText('Login:email');
      const form = await getByRole('form', { name: 'login-form' });

      await act(async () => {
        await fireEvent.submit(form);
      });

      expect(container.innerHTML).toMatch('Login:required');
    })
  });

  describe('when valid email and password', () => {
    it('executes the request and saves user', async () => {
      const { container, getByRole, getByLabelText } = render(component);
      const email = await getByLabelText('Login:email');
      const password = await getByLabelText('Login:password');
      const form = await getByRole('form', { name: 'login-form' });

      await act(async () => {
        await fireEvent.change(email, { target: { value: 'someone@wolox.com' } });
        await fireEvent.change(password, { target: { value: 'myPassword' } });
        await fireEvent.submit(form);
      });

      expect(mockLogin).toHaveBeenCalled();
      expect(mockSetStateUser).toHaveBeenCalled();
      expect(mockSetPersistantUser).toHaveBeenCalled();
    })
  });
});
