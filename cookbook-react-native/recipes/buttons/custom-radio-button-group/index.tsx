import React, { useState, Key, useEffect } from 'react';
import { ViewStyle, TextProps, View } from 'react-native';
import CustomText from '@textsRecipes/custom-text';

import styles, { errorTextProps } from './styles';
import RadioButton from './components/RadioButton';
import { getInitialSelectedState } from './utils';

interface CustomRadioButtonGroupProps<K extends Key, V> {
  radioButtonContainerStyle?: ViewStyle;
  radioButtonStyle?: ViewStyle;
  radioButtonTextProps?: TextProps;
  defaultOption?: K;
  disabledOptions?: Array<K>;
  error?: string | null;
  multioption?: boolean;
  onChange?: (selected: Array<K>) => void;
  options: Record<K, V>;
  selectedOptions?: Array<K>;
  style?: ViewStyle;
  title: string;
}

function CustomRadioButtonGroup<K extends Key = string, V = string>({
  radioButtonStyle,
  radioButtonContainerStyle,
  radioButtonTextProps,
  defaultOption,
  disabledOptions,
  error,
  multioption = false,
  onChange,
  options,
  selectedOptions,
  style,
  title
}: CustomRadioButtonGroupProps<K, V>) {
  const [selected, setSelected] = useState(getInitialSelectedState<K>(selectedOptions, defaultOption));

  useEffect(() => {
    onChange?.(
      Object.entries(selected).reduce<Array<K>>((selectedOptions, [option, isSelected]) => {
        if (isSelected) selectedOptions.push(option as K);
        return selectedOptions;
      }, [] as Array<K>)
    );
  }, [selected]);

  const handlePress = (option: K) =>
    setSelected({
      ...(multioption ? selected : {}),
      [option]: !selected[option]
    } as Record<K, boolean>);

  return (
    <View style={style}>
      <CustomText semiBold style={styles.title}>
        {title}
      </CustomText>
      {Object.entries<V>(options).map(([key, option]) => (
        <RadioButton<K, V>
          key={key}
          selected={selected[key as K]}
          optionKey={key as K}
          option={option}
          disabled={disabledOptions?.includes(key)}
          onPress={handlePress}
          style={radioButtonContainerStyle}
          radioButtonStyle={radioButtonStyle}
          textProps={radioButtonTextProps}
        />
      ))}
      <View style={styles.errorContainer}>
        {!!error && (
          <CustomText error textProps={errorTextProps}>
            {error}
          </CustomText>
        )}
      </View>
    </View>
  );
}

export default CustomRadioButtonGroup;
