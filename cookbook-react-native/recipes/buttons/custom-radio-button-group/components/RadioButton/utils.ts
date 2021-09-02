import { gray, blue, transparent } from '@constants/colors';

export const getBackgroundColor = (selected?: boolean) => (selected ? blue : transparent);

export const getBorderColor = (disabled?: boolean) => (disabled ? gray : blue);
