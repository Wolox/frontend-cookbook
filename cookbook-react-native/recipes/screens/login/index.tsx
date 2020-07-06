import React, { useCallback } from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import { Formik } from 'formik';
import CustomHighlightButton from '@buttonsRecipes/custom-highlight-button';
import CustomText from '@textsRecipes/custom-text';
import { CustomTextInputFormikField } from '@inputsRecipes/custom-text-input';
import { validationsWrapper, validateRequired, validateEmail } from '@utils/validations/validateUtils';
import CustomRadioButtonGroup from '@radioButtonsRecipes/custom-radio-button-group';
import CustomCheckBoxGroup from '@checkboxesRecipes/custom-checkbox-group';

import { AuthState } from './interfaces/authInterfaces';
import { actionCreators as AuthActions } from './redux/auth/actions';
import { FIELDS, INITIAL_VALUES } from './constants';
import './i18n';
import styles from './styles';

const WITHOUT_OPACITY = 1;

const optionsRecord = {
  A: 'option A',
  B: 'option B',
  C: 'option C',
  D: 'option D',
  E: 'option E',
};

interface State {
  auth: AuthState;
}

function Login() {
  const dispatch = useDispatch();
  const hasLoginError = useSelector<State, boolean>(store => !!store.auth.currentUserError);
  const handleLogin: (values: any) => void = useCallback(values => dispatch(AuthActions.login(values)), [
    dispatch
  ]);
  return (
    <TouchableOpacity activeOpacity={WITHOUT_OPACITY} onPress={Keyboard.dismiss} style={styles.container}>
      <Formik onSubmit={handleLogin} initialValues={INITIAL_VALUES}>
        {({ handleSubmit, isValid }) => (
          <>
            <View style={styles.form}>
              <CustomTextInputFormikField
                animated
                keyboardType="email-address"
                label={i18next.t('LOGIN:MAIL')}
                name={FIELDS.email}
                placeholder={i18next.t('LOGIN:MAIL_PLACEHOLDER')}
                showError={hasLoginError}
                validate={validationsWrapper([validateRequired, validateEmail])}
              />
              <CustomTextInputFormikField
                animated
                showEye
                secureTextEntry
                label={i18next.t('LOGIN:PASSWORD')}
                name={FIELDS.password}
                showError={hasLoginError}
                validate={validateRequired}
              />
              {hasLoginError && (
                <CustomText error center>
                  {i18next.t('LOGIN:LOGIN_FAILURE')}
                </CustomText>
              )}
            </View>
            <CustomHighlightButton
              onPress={handleSubmit}
              style={styles.formButton}
              title={i18next.t('LOGIN:LOG_IN')}
              disabled={hasLoginError || !isValid}
            />
            <CustomRadioButtonGroup
              title="RadioButtons"
              options={optionsRecord}
              disabledOptions={['E']}
              selectedOption={['A']}
            />
            <CustomCheckBoxGroup
              title="RadioButtons"
              options={optionsRecord}
              disabledOptions={['E']}
              selectedOptions={['A']}
            />
          </>
        )}
      </Formik>
    </TouchableOpacity>
  );
}

export default Login;
