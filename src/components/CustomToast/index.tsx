import React from 'react';
import {ErrorToast, SuccessToast} from 'react-native-toast-message';

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
    <SuccessToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text1NumberOfLines={3}
    />
  ),
  error: ({props}: ToastVariantsProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text1NumberOfLines={3}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};
