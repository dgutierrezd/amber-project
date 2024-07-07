import {View, ViewStyle} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Colors from '../../utils/Colors';

export default function RatesSkeleton() {
  const opacity = useSharedValue(0);

  useEffect(() => {
    const timingAnimation = withTiming(1, {duration: 1000});
    opacity.value = withRepeat(timingAnimation, -1, true);
    return () => {
      cancelAnimation(opacity);
    };
  }, []);

  const opacityStyle = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
    }),
    [],
  );

  return (
    <Animated.View style={[opacityStyle]}>
      <View
        style={{
          backgroundColor: Colors.purpleLight,
          borderRadius: 10,
          height: 40,
          width: 100,
          marginBottom: 10,
        }}
      />
      <View
        style={{
          backgroundColor: Colors.purpleLight,
          borderRadius: 10,
          height: 40,
          width: 200,
          marginBottom: 30,
        }}
      />
      <View
        style={{
          backgroundColor: Colors.purpleLight,
          borderRadius: 10,
          height: 40,
          width: 80,
          marginBottom: 10,
        }}
      />
    </Animated.View>
  );
}
