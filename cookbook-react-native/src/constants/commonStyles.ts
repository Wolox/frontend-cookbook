import {
  paleBlue,
  paleRed,
  palePurple,
  paleBlueBorder,
  palePurpleBorder,
  paleRedBorder,
  paleGray,
  paleGrayBorder,
  paleOrange,
  paleOrangeBorder,
  paleGreen,
  paleGreenBorder
} from './colors';
import { BORDER_WIDTH } from './dimentions';

const getPaleBorderFromPaleColor = (color: string) =>
  ({
    [paleBlue]: paleBlueBorder,
    [palePurple]: palePurpleBorder,
    [paleRed]: paleRedBorder,
    [paleGray]: paleGrayBorder,
    [paleOrange]: paleOrangeBorder,
    [paleGreen]: paleGreenBorder
  }[color]);

export const paleBackgroundWithBorder = (color: string) => ({
  backgroundColor: color,
  borderColor: getPaleBorderFromPaleColor(color),
  borderWidth: BORDER_WIDTH.THIN
});

export const OPACITY = {
  FULL: 0,
  DEFAULT: 0.7,
  NONE: 1
};
