import { Platform, Dimensions } from 'react-native';

export const isAndroid = Platform.OS === 'android';

const windowDimensions = Dimensions.get('window');
export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;
