import React, { useCallback, memo, useState, useMemo } from 'react';
import {
  TouchableHighlight,
  Image,
  TouchableHighlightProps,
  ViewStyle,
  ImageStyle,
  TextStyle,
  ActivityIndicator,
  View,
  GestureResponderEvent
} from 'react-native';
import CustomText from '@textsRecipes/custom-text';
import { CustomTextVariants } from '@textsRecipes/custom-text/constants';
import { getCustomStyles } from '@utils/styleUtils';

import styles from './styles';
import { VARIANTS, OPACITY } from './constants';
import { getUnderlayColor, getStyles, getFontProp, getActivityIndicatorColor, getButtonType, getButtonStatus } from './utils';

interface Props extends CustomTextVariants {
  activeOpacity?: number;
  big?: boolean;
  blocked?: boolean;
  borderless?: boolean;
  disabled?: boolean;
  icon?: number;
  iconStyle?: ImageStyle;
  large?: boolean;
  link?: boolean;
  loading?: boolean;
  medium?: boolean;
  onPress: TouchableHighlightProps['onPress'];
  secondary?: boolean;
  small?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
}

const CustomHighlightButton = ({
  activeOpacity,
  big,
  blocked,
  disabled,
  icon,
  iconStyle,
  link,
  loading,
  onPress,
  secondary,
  style,
  title,
  textStyle,
  ...props
}: Props) => {
  const [focused, setFocused] = useState(false);
  const customStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles), [props]);
  const customTextStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles, 'Content'), [props]);
  const handlePressIn = useCallback(() => setFocused(true), []);
  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      if (onPress) onPress(event);
      setFocused(false);
    },
    [onPress]
  );
  const buttonType = getButtonType(secondary, link);
  const buttonStatus = getButtonStatus(focused, disabled);
  const { BUTTON_STYLE, TEXT_STYLE, ICON_STYLE } = useMemo(
    () => getStyles(buttonType, buttonStatus),
    [buttonType, buttonStatus]
  );
  const fontProp = useMemo(() => getFontProp(link, big), [link, big]);
  return loading ? (
    <View style={[styles.containerLoading, style]}>
      <ActivityIndicator size="large" color={getActivityIndicatorColor(buttonType)} />
    </View>
  ) : (
    <TouchableHighlight
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.container, big && styles.bigContainer, BUTTON_STYLE, customStyles(), style]}
      underlayColor={getUnderlayColor(buttonType)}
      activeOpacity={activeOpacity}
      disabled={blocked || disabled}>
      <>
        {icon && <Image source={icon} resizeMode="contain" style={[styles.icon, ICON_STYLE, iconStyle]} />}
        {title && (
          <CustomText {...fontProp} style={[TEXT_STYLE, customTextStyles(), textStyle]} {...props}>
            {title}
          </CustomText>
        )}
      </>
    </TouchableHighlight>
  );
};

CustomHighlightButton.defaultProps = {
  activeOpacity: OPACITY.DEFAULT
};

export default memo(CustomHighlightButton);
