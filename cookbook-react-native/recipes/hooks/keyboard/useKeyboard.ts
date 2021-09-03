import { useCallback, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { isIos } from '@constants/platform';

const showListener = isIos ? 'keyboardWillShow' : 'keyboardDidShow';
const hideListener = isIos ? 'keyboardWillHide' : 'keyboardDidHide';

const useKeyboard = (): [boolean, () => void] => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleDismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
    setKeyboardVisible(false);
  }, []);

  useEffect(() => {
    const onKeyboardDidShow = () => setKeyboardVisible(true);
    const onKeyboardDidHide = () => setKeyboardVisible(false);

    Keyboard.addListener(showListener, onKeyboardDidShow);
    Keyboard.addListener(hideListener, onKeyboardDidHide);

    return () => {
      Keyboard.removeListener(showListener, onKeyboardDidShow);
      Keyboard.removeListener(hideListener, onKeyboardDidHide);
    };
  }, []);

  return [keyboardVisible, handleDismissKeyboard];
};

export default useKeyboard;
