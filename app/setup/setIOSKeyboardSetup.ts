import {Platform} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

export const IOSGuard = (func: Function) => {
  if (Platform.OS === 'ios') {
    func();
  }
};

export const setIOSKeyboardSetup = () => {
  IOSGuard(() => {
    KeyboardManager.setToolbarPreviousNextButtonEnable(true);
    KeyboardManager.setEnable(true);
  });
};
