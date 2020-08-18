import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from '~contexts/UserContext';
import { actionCreators, Credentials, User } from '~contexts/UserContext/reducer';
import { useLazyRequest } from '~app/hooks/useRequest';
import { login, setCurrentUser } from '~services/AuthServices';

import i18next from 'i18next';
import { useForm } from 'react-hook-form';

import FormInput from '~components/FormInput';
import PATHS from '~components/Routes/paths';
import { withSpinner } from '~components/Spinner';
import { LoginError } from '~services/AuthServices';
import { Nullable } from '~utils/types';
import { Error } from '~app/hooks/useRequest';
import { stringArrayToObject } from '~utils/array';

import styles from './styles.module.scss';

const FIELDS = stringArrayToObject(['email', 'password']);

function LoginContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [, loading, loginError, loginRequest] = useLazyRequest({
    request: (credentials: Credentials) => login(credentials),
    withPostSuccess: response => {
      const userResponse = response as User;
      dispatch(actionCreators.setUser(userResponse));
      setCurrentUser(userResponse);
      // history.push('/');
    }
  });
  const { register, handleSubmit } = useForm();
  const errorMessage = loginError?.errorData?.message;

  const handleLogin = (values: Credentials) => {
    debugger
    dispatch(actionCreators.login(values));
    loginRequest(values);
  };

  return (
    <div className={`column center full-width ${styles.container}`}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('Login:login')}</h1>
        <h2>{i18next.t('Login:loginExplanation')}</h2>
      </div>
      <form className={`column m-bottom-2 ${styles.formContainer}`} onSubmit={handleSubmit(handleLogin)}>
        {/* <FormInput
          label={i18next.t('Login:email')}
          name={FIELDS.email}
          inputType="text"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Login:emailPlaceholder') as string}
          disabled={loading}
          inputRef={register}
        />
        <FormInput
          label={i18next.t('Login:password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={i18next.t('Login:passwordPlaceholder') as string}
          disabled={loading}
          inputRef={register}
        /> */}
        <div className="column center">
          <button disabled={loading} type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
            {i18next.t('Login:enter')}
          </button>
          <span className={`row center middle full-width m-top-1 m-bottom-1 ${errorMessage ? '' : 'hidden'}`}>
            {i18next.t(`Login:${errorMessage || 'error'}`)}
          </span>
          <a href={PATHS.recoverPassword}>{i18next.t('Login:forgotPassword')}</a>
          <a href={PATHS.registration}>{i18next.t('Login:createAccount')}</a>
        </div>
      </form>
    </div>
  );
}

export default LoginContainer;
