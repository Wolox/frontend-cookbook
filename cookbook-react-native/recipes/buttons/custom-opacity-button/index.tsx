import React, { useCallback, memo } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import CustomText from '@textsRecipes/custom-text';

import { VARIANTS, OPACITY, CustomButtonProps } from './constants';
import { getCustomStyles } from './utils/styleUtils';
import styles from './styles';

const CustomButton = (props: CustomButtonProps) => {
  const customStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles), [props]);
  const customTextStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles, 'Content'), [props]);
  const { onPress, style, activeOpacity, icon, title, iconStyle, disabled, textStyle, ...textProps } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, customStyles(), style]}
      activeOpacity={activeOpacity}
      disabled={disabled}>
      {icon && <Image source={icon} resizeMode="contain" style={[styles.icon, iconStyle]} />}
      {title && (
        <CustomText {...textProps} style={[customTextStyles(), textStyle]}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  activeOpacity: OPACITY.DEFAULT
};

export default memo(CustomButton);
