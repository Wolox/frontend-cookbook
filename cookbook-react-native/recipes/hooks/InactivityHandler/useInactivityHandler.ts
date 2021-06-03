/* eslint-disable id-length */
import { useCallback, useRef, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { PanResponder, View } from 'react-native';
import { Nullable } from '@interfaces/globalInterfaces';

const containerStyle = { flex: 1 };
const timeForInactivity = 6000; // Time to set user as inactive in milliseconds
const actionToDispatch = null; // Action to dispatch when the user is inactive. Delete this line and import the action that you wanna dispatch.

export const useInactivityHandler = () => {
  const dispatch = useDispatch();
  const timer = useRef<Nullable<ReturnType<typeof setInterval>>>(null);

  const stopTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  const handleTouch = () => {
    stopTimer();
    const startTime = Date.now();
    timer.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= timeForInactivity) {
        // You can add a condition here for the dispatch, but the stopTimer() should always be called.
        dispatch(actionToDispatch);
        stopTimer();
      }
    }, 100)
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        handleTouch();
        return false;
      }
    })
  ).current;

  return {
    Component: View,
    style: containerStyle,
    handler: panResponder.panHandlers
  };
};
