import { white, transparent, gray, blue, green } from '@constants/colors';
import { GenericObjectInterface } from '@interfaces/globalInterfaces';
import { scale } from '@utils/scalingUtils';

import { ButtonType, ButtonStatus } from './interfaces';

export const VARIANTS = ['borderless', 'small', 'medium', 'large'];

export const OPACITY = {
  DEFAULT: 0.7
};

export const BORDER_WIDTH = {
  NONE: 0,
  THIN: 0.5,
  REGULAR: 1,
  BOLD: 2
};

// TODO: Customize min-width
/* eslint-disable no-magic-numbers */
export const SIZES = {
  SMALL: scale(140),
  MEDIUM: scale(160),
  LARGE: scale(200)
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

// TODO: Customize colors
const PRIMARY_COLOR = blue;
const SECONDARY_COLOR = green;
const DISABLED_COLOR = gray;

// Highlighted bagkground color
export const UNDERLAY_COLOR = {
  [BUTTON_TYPES.PRIMARY]: SECONDARY_COLOR,
  [BUTTON_TYPES.SECONDARY]: white,
  [BUTTON_TYPES.LINK]: transparent
};

// Activity indicator color
export const ACTIVITY_INDICATOR_COLOR = {
  [BUTTON_TYPES.PRIMARY]: PRIMARY_COLOR,
  [BUTTON_TYPES.SECONDARY]: PRIMARY_COLOR,
  [BUTTON_TYPES.LINK]: PRIMARY_COLOR
};

// Background color
export const BACKGROUND_COLOR = {
  [BUTTON_TYPES.LINK]: {
    [BUTTON_STATUS.FOCUSED]: transparent,
    [BUTTON_STATUS.DISABLED]: transparent,
    [BUTTON_STATUS.DEFAULT]: transparent
  },
  [BUTTON_TYPES.PRIMARY]: {
    [BUTTON_STATUS.FOCUSED]: SECONDARY_COLOR,
    [BUTTON_STATUS.DISABLED]: DISABLED_COLOR,
    [BUTTON_STATUS.DEFAULT]: PRIMARY_COLOR
  },
  [BUTTON_TYPES.SECONDARY]: {
    [BUTTON_STATUS.FOCUSED]: white,
    [BUTTON_STATUS.DISABLED]: white,
    [BUTTON_STATUS.DEFAULT]: white
  }
};

// Font and border color
export const COLOR = {
  [BUTTON_TYPES.PRIMARY]: {
    [BUTTON_STATUS.FOCUSED]: white,
    [BUTTON_STATUS.DEFAULT]: white,
    [BUTTON_STATUS.DISABLED]: white
  },
  [BUTTON_TYPES.SECONDARY]: {
    [BUTTON_STATUS.FOCUSED]: SECONDARY_COLOR,
    [BUTTON_STATUS.DEFAULT]: PRIMARY_COLOR,
    [BUTTON_STATUS.DISABLED]: DISABLED_COLOR
  },
  [BUTTON_TYPES.LINK]: {
    [BUTTON_STATUS.FOCUSED]: SECONDARY_COLOR,
    [BUTTON_STATUS.DEFAULT]: PRIMARY_COLOR,
    [BUTTON_STATUS.DISABLED]: DISABLED_COLOR
  }
};
