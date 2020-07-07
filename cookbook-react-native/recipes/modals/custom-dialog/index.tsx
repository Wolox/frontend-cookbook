import React from 'react';
import { View, Image } from 'react-native';
import CustomText from '@textsRecipes/custom-text';
import CustomHighlightButton from '@buttonsRecipes/custom-highlight-button';
import CustomModal from '@modalsRecipes/custom-modal';

import { DialogType } from './interfaces';
import { MODAL_CONTENT } from './constants';
import styles from './styles';

interface Props {
  onClose: () => void;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  type: keyof typeof DialogType;
  visible: boolean;
}

const CustomDialog = ({ onClose, onPrimaryAction, onSecondaryAction, type, visible }: Props) => {
  const { icon, title, subtitle, primaryButtonText, secondaryButtonText } = MODAL_CONTENT[type];
  const handlePrimaryAction = () => {
    if (onPrimaryAction) onPrimaryAction();
    onClose();
  };
  const handleSecondaryAction = () => {
    if (onSecondaryAction) onSecondaryAction();
    onClose();
  };
  return (
    <CustomModal visible={visible} onClose={onClose}>
      <View style={styles.modal}>
        {icon && <Image source={icon} resizeMode="contain" />}
        <CustomText bold center style={styles.title}>
          {title}
        </CustomText>
        {!!subtitle && (
          <CustomText center style={styles.subtitle}>
            {subtitle}
          </CustomText>
        )}
        <CustomHighlightButton title={primaryButtonText} onPress={handlePrimaryAction} style={styles.button} />
        {!!secondaryButtonText && <CustomHighlightButton secondary title={secondaryButtonText} style={styles.button} onPress={handleSecondaryAction} />}
      </View>
    </CustomModal>
  );
};

export default CustomDialog;
