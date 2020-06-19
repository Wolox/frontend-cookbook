import React, { useState, Key, useRef, useEffect } from 'react';
import { ViewStyle, TextProps, View, TouchableOpacity } from 'react-native';
import CustomText from '@textsRecipes/custom-text';

import styles, { errorTextProps } from './styles';
import Checkbox from './components/Checkbox';
import { getInitialSelectedState } from './utils';

interface CustomCheckboxesProps<K extends Key, V> {
  title: string;
  options: Record<K, V>,
  selectedOptions?: Array<K>;
  defaultOption?: K,
  multioption?: boolean;
  disabledOptions?: Array<K>;
  onChange?: (selected: Array<K>) => void;
  checkboxContainerStyle?: ViewStyle;
  checkboxStyle?: ViewStyle;
  checkboxTextProps?: TextProps;
  style?: ViewStyle;
}

function CustomCheckboxes<K extends Key = string, V = string>({
  title,
  options,
  defaultOption,
  selectedOptions,
  disabledOptions,
  style,
  multioption = false,
  onChange,
  checkboxStyle,
  checkboxContainerStyle,
  checkboxTextProps,
  error
}: CustomCheckboxesProps<K, V>) {
  const [selected, setSelected] = useState(getInitialSelectedState<K>(selectedOptions, defaultOption));

  useEffect(() => {
    onChange?.(Object.entries(selected).reduce<Array<K>>(
      (selectedOptions, [option, isSelected]) => {
        if (isSelected) selectedOptions.push(option as K);
        return selectedOptions;
      },
      [] as Array<K>
    ));
  }, [selected])

  const handlePress = (option: K) =>
    setSelected({
      ...(multioption ? selected : {}),
      [option]: !selected[option]
    } as Record<K, boolean>);
    console.tron.log(selected)

  return (
    <View style={style}>
      <CustomText semiBold style={styles.title}>{title}</CustomText>
      {Object.entries<V>(options).map(
        ([key, option]) => (
          <Checkbox<K, V>
            key={key}
            selected={selected[key as K]}
            optionKey={key as K}
            option={option}
            disabled={disabledOptions?.includes(key)}
            onPress={handlePress}
            style={checkboxContainerStyle}
            checkboxStyle={checkboxStyle}
            textProps={checkboxTextProps}
          />
        )
      )}
      <View style={styles.errorContainer}>
        {!!error && <CustomText error textProps={errorTextProps}>{error}</CustomText>}
      </View>
    </View>
  );
}

export default CustomCheckboxes;
