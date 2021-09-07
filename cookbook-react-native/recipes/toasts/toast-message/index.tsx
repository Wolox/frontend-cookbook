import React, { useRef, useCallback, useEffect } from 'react';
import { SafeAreaView, Animated, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomText from '@textsRecipes/custom-text';
import { OPACITY } from '@constants/commonStyles';
import { State } from '@interfaces/reduxInterfaces';

import { TOAST_TYPES } from './constants';
import actionCreators from './redux/actions';
import styles from './styles';

const MESSAGE_DURATION = 1500;

/* eslint-disable max-nested-callbacks */
function ToastMessage() {
  const dispatch = useDispatch();
  const { active, message, type } = useSelector((state: State) => state.toastMessage);
  const animatedScale = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const isInfo = type === TOAST_TYPES.INFO_TOAST;
  const isError = type === TOAST_TYPES.ERROR_TOAST;

  const handleAnimateToast = useCallback(
    (show: boolean, callback: () => void) => {
      Animated.parallel([
        Animated.timing(animatedScale, { toValue: show ? 1 : 0, useNativeDriver: false }),
        Animated.timing(animatedOpacity, {
          toValue: show ? OPACITY.NONE : OPACITY.FULL,
          useNativeDriver: false
        })
      ]).start(callback);
    },
    [animatedOpacity, animatedScale]
  );

  useEffect(() => {
    let timeoutId: number | null = null;

    if (active) {
      handleAnimateToast(true, () => {
        timeoutId = setTimeout(
          () => handleAnimateToast(false, () => dispatch(actionCreators.hideToastMessage())),
          MESSAGE_DURATION
        );
      });
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        dispatch(actionCreators.hideToastMessage());
      }
    };
  }, [handleAnimateToast, dispatch, active]);

  return (
    <Animated.View
      pointerEvents="auto"
      style={[
        styles.viewContainer,
        {
          transform: [{ scale: animatedScale }],
          opacity: animatedOpacity
        }
      ]}>
      <SafeAreaView style={styles.container}>
        <View
          style={[styles.contentContainer, isError && styles.errorContainer, isInfo && styles.infoContainer]}>
          <CustomText green={!(isError || isInfo)} error={isError} blue={isInfo} center>
            {message}
          </CustomText>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

export default ToastMessage;
