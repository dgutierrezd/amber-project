import React from 'react';
import {SafeAreaView} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

interface CustomSnackbarProps {
  /** Label of the snackbar */
  text1: string;
  /** Description text of the snackbar */
  text2: string;
}

interface ToastVariantsProps {
  props: CustomSnackbarProps;
}

export const toastConfig = {
  success: ({props}: ToastVariantsProps) => (
    <BaseToast
      {...props}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
    />
  ),
  error: ({props}: ToastVariantsProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};
