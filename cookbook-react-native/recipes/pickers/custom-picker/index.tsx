import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import i18next from 'i18next';
import CustomOpacityButton from '@buttonsRecipes/custom-opacity-button';
import CustomModal from '@modalsRecipes/custom-modal';

import './i18n';
import styles, { itemStyleConfig } from './styles';

type Item<V> = {
  text: string;
  value: V
}

interface Props<V> {
  onAccept: (_: V) => void;
  onClose: () => void;
  options: Array<Item<V>>
  visible: boolean;
}

function CustomPicker<V>({ onAccept, onClose, options, visible }: Props<V>) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleAccept = () => {
    const select = selectedIndex || 0;
    onClose();
    onAccept(options[select].value);
  };

  const optionsString = useMemo(() => options.map(o => o.text), [options]);
  return (
    <CustomModal visible={visible} onClose={onClose} style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.header}>
          <CustomOpacityButton onPress={onClose} title={i18next.t('CUSTOM_PICKER:CANCEL')} />
          <CustomOpacityButton onPress={handleAccept} title={i18next.t('CUSTOM_PICKER:ACCEPT')} />
        </View>
        <WheelPicker
          {...itemStyleConfig}
          data={optionsString}
          style={styles.picker}
          selectedItem={selectedIndex}
          onItemSelected={setSelectedIndex}
        />
      </View>
    </CustomModal>
  );
}

export default CustomPicker;
