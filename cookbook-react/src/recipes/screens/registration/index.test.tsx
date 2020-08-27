import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent }  from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import 'mutationobserver-shim';

import { RootComponent } from '~utils/tests';

import Registration from '.';

jest.mock('i18next', () => ({
  t: (key: string) => key
}));

describe('#Registration', () => {
  const component = <Registration />;
  const validValues = { firstName: 'John', lastName: 'Doe', email: 'someEmail@wolox.com', password: 'aPassword' }

  describe('when mounting', () => {
    // it('shows valid content', () => {
    //   const instance = TestRenderer.create(component)
    //   expect(instance.toJSON()!).toMatchSnapshot();
    // })
  });

  describe('when values are empty and form is submitted', () => {
    it('shows the required message for each required field', async () => {
      const { getByRole, getByLabelText } = render(component);
      const firstName = await getByLabelText('Registration:firstName');
      const lastName = await getByLabelText('Registration:lastName');
      const email = await getByLabelText('Registration:email');
      const password = await getByLabelText('Registration:password');
      const passwordConfirmation = await getByLabelText('Registration:confirmPassword');
      const form = await getByRole('form', { name: 'registration-form' });
      
      await act(async () => {
        await fireEvent.submit(form);
      });

      expect(firstName.parentElement?.innerHTML).toMatch('Registration:requiredError');
      expect(lastName.parentElement?.innerHTML).toMatch('Registration:requiredError');
      expect(email.parentElement?.innerHTML).toMatch('Registration:requiredError');
      expect(password.parentElement?.innerHTML).toMatch('Registration:requiredError');
      expect(passwordConfirmation.parentElement?.innerHTML).toMatch('Registration:requiredError');
    })
  });

  describe('when email format is invalid and form is submitted', () => {
    it('shows the email error', async () => {
      const { getByRole, getByLabelText, getAllByRole } = render(component);
      const firstName = await getByLabelText('Registration:firstName');
      const lastName = await getByLabelText('Registration:lastName');
      const email = await getByLabelText('Registration:email');
      const password = await getByLabelText('Registration:password');
      const passwordConfirmation = await getByLabelText('Registration:confirmPassword');
      const form = await getByRole('form', { name: 'registration-form' });
      
      await act(async () => {
        await fireEvent.change(firstName, { target: { value: validValues.firstName } });
        await fireEvent.change(lastName, { target: { value: validValues.lastName } });
        await fireEvent.change(email, { target: { value: 'invalid email' } });
        await fireEvent.change(password, { target: { value: validValues.password } });
        await fireEvent.change(passwordConfirmation, { target: { value: validValues.password } });
        await fireEvent.submit(form);
      });
      const errors = await getAllByRole('alert');
  
      expect(email.parentElement?.innerHTML).toMatch('Registration:emailFormatError');
      expect(errors.length).toBe(1);
    })
  });

  describe('when password length is too short and form is submitted', () => {
    it('shows the password error', async () => {
      const { getByRole, getByLabelText, getAllByRole } = render(component);
      const firstName = await getByLabelText('Registration:firstName');
      const lastName = await getByLabelText('Registration:lastName');
      const email = await getByLabelText('Registration:email');
      const password = await getByLabelText('Registration:password');
      const passwordConfirmation = await getByLabelText('Registration:confirmPassword');
      const form = await getByRole('form', { name: 'registration-form' });
      
      await act(async () => {
        await fireEvent.change(firstName, { target: { value: validValues.firstName } });
        await fireEvent.change(lastName, { target: { value: validValues.lastName } });
        await fireEvent.change(email, { target: { value: validValues.email } });
        await fireEvent.change(password, { target: { value: 'short' } });
        await fireEvent.change(passwordConfirmation, { target: { value: 'short' } });
        await fireEvent.submit(form);
      });
      const errors = await getAllByRole('alert');

      expect(password.parentElement?.innerHTML).toMatch('Registration:passwordLengthError');
      expect(errors.length).toBe(1);
    })
  });

  describe('when password confirmation does not match password and form is submitted', () => {
    it('shows the password confirmation error', async () => {
      const { getByRole, getByLabelText, getAllByRole } = render(component);
      const firstName = await getByLabelText('Registration:firstName');
      const lastName = await getByLabelText('Registration:lastName');
      const email = await getByLabelText('Registration:email');
      const password = await getByLabelText('Registration:password');
      const passwordConfirmation = await getByLabelText('Registration:confirmPassword');
      const form = await getByRole('form', { name: 'registration-form' });
      
      await act(async () => {
        await fireEvent.change(firstName, { target: { value: validValues.firstName } });
        await fireEvent.change(lastName, { target: { value: validValues.lastName } });
        await fireEvent.change(email, { target: { value: validValues.email } });
        await fireEvent.change(password, { target: { value: validValues.password } });
        await fireEvent.change(passwordConfirmation, { target: { value: `${validValues.password}a` } });
        await fireEvent.submit(form);
      });
      const errors = await getAllByRole('alert');
      
      expect(passwordConfirmation.parentElement?.innerHTML).toMatch('Registration:confirmPasswordError');
      expect(errors.length).toBe(1);
    })
  });

  describe('when values are valid and form is submitted', () => {
    it('created the user', async () => {
      const { getByRole, getByLabelText, getAllByRole } = render(component);
      const firstName = await getByLabelText('Registration:firstName');
      const lastName = await getByLabelText('Registration:lastName');
      const email = await getByLabelText('Registration:email');
      const password = await getByLabelText('Registration:password');
      const passwordConfirmation = await getByLabelText('Registration:confirmPassword');
      const form = await getByRole('form', { name: 'registration-form' });
      
      await act(async () => {
        await fireEvent.change(firstName, { target: { value: validValues.firstName } });
        await fireEvent.change(lastName, { target: { value: validValues.lastName } });
        await fireEvent.change(email, { target: { value: validValues.email } });
        await fireEvent.change(password, { target: { value: validValues.password } });
        await fireEvent.change(passwordConfirmation, { target: { value: `${validValues.password}a` } });
        await fireEvent.submit(form);
      });
      const errors = await getAllByRole('alert');
      
      expect(passwordConfirmation.parentElement?.innerHTML).toMatch('Registration:confirmPasswordError');
      expect(errors.length).toBe(1);
    })
  });
});
