import React, { Key } from 'react';
import { TouchableOpacity, ViewStyle, View, TextProps } from 'react-native';
import CustomText from '@textsRecipes/custom-text';

import styles from './styles';
import { getBackgroundColor, getBorderColor } from './utils';

interface Props<K, T> {
  option: T;
  optionKey: K;
  selected: boolean;
  disabled?: boolean;
  onPress: (option: K) => void;
  textProps?: TextProps;
  style?: ViewStyle;
  radioButtonStyle?: ViewStyle;
}

function RadioButton<K extends Key, T>({
  selected = false,
  option,
  optionKey,
  disabled,
  onPress,
  textProps,
  style,
  radioButtonStyle
}: Props<K, T>) {
  const handlePress = () => onPress(optionKey);
  const isSelected = !disabled && selected;
  const backgroundColor = getBackgroundColor(isSelected);
  const borderColor = getBorderColor(disabled);
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handlePress} disabled={disabled}>
      <View style={[styles.option, isSelected && styles.optionSelected, { backgroundColor, borderColor }, radioButtonStyle]} />
      <CustomText gray={disabled} textProps={textProps}>{option}</CustomText>
    </TouchableOpacity>
  );
}

export default RadioButton;
