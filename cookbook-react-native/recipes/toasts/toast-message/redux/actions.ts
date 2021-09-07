import { createTypes } from 'redux-recompose';
import { Action } from '@interfaces/reduxInterfaces';

import { ToastAction } from '../interfaces';
import { TOAST_TYPES } from '../constants';

export const actions = createTypes(['SHOW_MESSAGE', 'HIDE_MESSAGE'], '@@TOAST');

const actionCreators = {
  showToastMessage: (message: string, type = TOAST_TYPES.SUCCESS_TOAST): Action<ToastAction> => ({
    type: actions.SHOW_MESSAGE,
    payload: { message, type }
  }),
  hideToastMessage: () => ({
    type: actions.HIDE_MESSAGE
  })
};

export default actionCreators;
