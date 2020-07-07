import React, { ReactNode } from 'react';
import { View, Modal, TouchableWithoutFeedback, ViewStyle } from 'react-native';

import styles from './styles';

interface Props {
  children: ReactNode;
  onClose: () => void;
  style?: ViewStyle;
  visible: boolean;
}
const CustomModal = ({
  children,
  onClose,
  style,
  visible
}: Props) => {
  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <View style={[styles.container, style]}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.outsideModal} />
        </TouchableWithoutFeedback>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;
