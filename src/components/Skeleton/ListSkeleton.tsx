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

export default function ListSkeleton() {
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
      {[...Array(6).keys()].map(item => (
        <View
          key={item}
          style={{
            backgroundColor: Colors.grayLight,
            borderRadius: 10,
            height: 100,
            width: '100%',
            marginBottom: 10,
          }}
        />
      ))}
    </Animated.View>
  );
}
