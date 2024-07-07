import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

export const onImpactLight = () => {
  ReactNativeHapticFeedback.trigger('impactLight');
};

export const onImpactMedium = () => {
  ReactNativeHapticFeedback.trigger('impactMedium');
};

export const onImpactHeavy = () => {
  ReactNativeHapticFeedback.trigger('impactHeavy');
};

export const onNotificationSuccess = () => {
  ReactNativeHapticFeedback.trigger('notificationSuccess');
};
