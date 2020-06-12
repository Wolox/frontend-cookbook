import { primaryColor, secondaryColor, white, transparent, disabledColor } from './colors';
import { ButtonType, ButtonStatus } from '../interfaces';
import { GenericObjectInterface } from '../constants/interfaces';

export const VARIANTS = ['borderless', 'small', 'medium', 'large'];

export const OPACITY = {
  DEFAULT: 0.7
};

export const BUTTON_TYPES: GenericObjectInterface<ButtonType> = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LINK: 'link'
}

export const BUTTON_STATUS: GenericObjectInterface<ButtonStatus> = {
  FOCUSED: 'focused',
  DISABLED: 'disabled',
  DEFAULT: 'default'
}

export const UNDERLAY_COLOR = {
  [BUTTON_TYPES.PRIMARY]: secondaryColor,
  [BUTTON_TYPES.SECONDARY]: white,
  [BUTTON_TYPES.LINK]: transparent
};

export const ACTIVITY_INDICATOR_COLOR = {
  [BUTTON_TYPES.PRIMARY]: primaryColor,
  [BUTTON_TYPES.SECONDARY]: secondaryColor,
  [BUTTON_TYPES.LINK]: primaryColor
};

export const BACKGROUND_COLOR = {
  [BUTTON_TYPES.LINK]: {
    [BUTTON_STATUS.FOCUSED]: transparent,
    [BUTTON_STATUS.DISABLED]: transparent,
    [BUTTON_STATUS.DEFAULT]: transparent
  },
  [BUTTON_TYPES.PRIMARY]: {
    [BUTTON_STATUS.FOCUSED]: secondaryColor,
    [BUTTON_STATUS.DISABLED]: disabledColor,
    [BUTTON_STATUS.DEFAULT]: primaryColor
  },
  [BUTTON_TYPES.SECONDARY]: {
    [BUTTON_STATUS.FOCUSED]: white,
    [BUTTON_STATUS.DISABLED]: white,
    [BUTTON_STATUS.DEFAULT]: white
  }
};

export const COLOR = {
  [BUTTON_TYPES.PRIMARY]: {
    [BUTTON_STATUS.FOCUSED]: white,
    [BUTTON_STATUS.DEFAULT]: white,
    [BUTTON_STATUS.DISABLED]: white
  },
  [BUTTON_TYPES.SECONDARY]: {
    [BUTTON_STATUS.FOCUSED]: secondaryColor,
    [BUTTON_STATUS.DEFAULT]: primaryColor,
    [BUTTON_STATUS.DISABLED]: disabledColor
  },
  [BUTTON_TYPES.LINK]: {
    [BUTTON_STATUS.FOCUSED]: secondaryColor,
    [BUTTON_STATUS.DEFAULT]: primaryColor,
    [BUTTON_STATUS.DISABLED]: disabledColor
  }
};
