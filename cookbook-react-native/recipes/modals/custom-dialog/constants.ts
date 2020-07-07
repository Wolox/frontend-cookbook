import i18next from 'i18next';
import { DialogInfo, DialogType } from './interfaces';

import './i18n';

export const MODAL_CONTENT: Record<keyof typeof DialogType, DialogInfo> = {
  [DialogType.GENERAL_SUCCESS]: {
    title: i18next.t('CUSTOM_DIALOG:SUCCESS_TITLE'),
    subtitle: i18next.t('CUSTOM_DIALOG:SUCCESS_SUBTITLE'),
    primaryButtonText: i18next.t('CUSTOM_DIALOG:SUCCESS_BUTTON_TEXT'),
    secondaryButtonText: i18next.t('CUSTOM_DIALOG:SUCCESS_SECONDARY_BUTTON_TEXT')
  },
  [DialogType.GENERAL_ERROR]: {
    title: i18next.t('CUSTOM_DIALOG:ERROR_TITLE'),
    subtitle: i18next.t('CUSTOM_DIALOG:ERROR_SUBTITLE'),
    primaryButtonText: i18next.t('CUSTOM_DIALOG:ERROR_BUTTON_TEXT')
  }
};
