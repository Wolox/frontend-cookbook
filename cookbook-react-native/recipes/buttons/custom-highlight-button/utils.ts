import { ButtonType, ButtonStatus } from './interfaces';
import styles, { GENERAL_BOX_SHADOW } from './styles';
import {
  COLOR,
  UNDERLAY_COLOR,
  ACTIVITY_INDICATOR_COLOR,
  BACKGROUND_COLOR,
  BUTTON_TYPES,
  BUTTON_STATUS
} from './constants';

export const getButtonType = (secondary?: boolean, link?: boolean) => {
  if (link) return BUTTON_TYPES.LINK;
  return secondary ? BUTTON_TYPES.SECONDARY : BUTTON_TYPES.PRIMARY;
}

export const getButtonStatus = (focused: boolean, disabled?: boolean) => {
  if (focused) return BUTTON_STATUS.FOCUSED;
  if (disabled) return BUTTON_STATUS.DISABLED;
  return BUTTON_STATUS.DEFAULT;
}

export const getUnderlayColor = (buttonType: ButtonType) => UNDERLAY_COLOR[buttonType];

export const getActivityIndicatorColor = (buttonType: ButtonType) => ACTIVITY_INDICATOR_COLOR[buttonType];

const getBackgroundColor = (buttonType: ButtonType, buttonStatus: ButtonStatus) =>
  BACKGROUND_COLOR[buttonType][buttonStatus];

const getColor = (buttonType: ButtonType, buttonStatus: ButtonStatus) => COLOR[buttonType][buttonStatus];

const isBorderless = (buttonType: ButtonType) => buttonType !== BUTTON_TYPES.SECONDARY;

const hasShadow = (buttonType: ButtonType, buttonStatus: ButtonStatus) =>
  buttonType === BUTTON_TYPES.LINK || buttonStatus === BUTTON_STATUS.DISABLED;

export const getStyles = (
  buttonType: ButtonType,
  buttonStatus: ButtonStatus
) => {
  const color = getColor(buttonType, buttonStatus);
  const backgroundColor = getBackgroundColor(buttonType, buttonStatus);
  const tintColor = color;
  return {
    BUTTON_STYLE: {
      ...(hasShadow(buttonType, buttonStatus) ? {} : GENERAL_BOX_SHADOW),
      ...(isBorderless(buttonType) ? styles.borderless : {}),
      borderColor: color,
      backgroundColor
    },
    TEXT_STYLE: {
      color
    },
    ICON_STYLE: {
      tintColor
    }
  };
};

export const getFontProp = (link: boolean = false, big: boolean = false) =>
  link ? { link } : big ? { bigButton: true } : { button: true };
