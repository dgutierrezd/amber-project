import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Colors from '../../utils/Colors';
import {Currency} from '../../interfaces';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getCurrencyRatesAction} from '../../redux/actions';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import he from 'he';
import {onImpactMedium} from '../../utils/haptics';
import symbols from '../../utils/currency-symbols.json';
import {styles} from './styles';

const CurrencyCard = ({name, id}: Currency) => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation: any = useNavigation();

  const dispatch = useDispatch();

  const navigateRates = () => {
    dispatch(getCurrencyRatesAction(id));
    navigation.navigate('CurrencyRates', {
      id,
    });
  };

  const pressed = useSharedValue<boolean>(false);

  const offset = useSharedValue<number>(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      runOnJS(setIsPressed)(true);
      pressed.value = true;
    })
    .onChange(async event => {
      if (event.translationX < -150) {
        offset.value = withSpring(0);
        pressed.value = false;
        runOnJS(onImpactMedium)();
        runOnJS(navigateRates)();
      }
      offset.value = event.translationX;
    })
    .onFinalize(() => {
      runOnJS(setIsPressed)(false);
      offset.value = withSpring(0);
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: offset.value},
      {scale: withTiming(pressed.value ? 1.2 : 1)},
    ],
  }));

  const start = -150;
  const end = 0;
  const startValue = 0;
  const endValue = 1;

  const opacityStyle = useAnimatedStyle(() => ({
    opacity:
      offset.value <= -150
        ? 0
        : offset.value >= 0
        ? 1
        : startValue +
          ((offset.value - start) / (end - start)) * (endValue - startValue),
  }));

  const symbol = symbols.find(s => s.abbreviation === id)?.symbol || '$';

  return (
    <GestureHandlerRootView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.purple, Colors.purpleLight]}
        style={styles.gradientView}>
        <Animated.View style={[opacityStyle]}>
          <Text style={styles.nameTitle}>{name}</Text>
          <Text style={styles.idTitle}>{id}</Text>
        </Animated.View>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.animatedContainer, animatedStyles]}>
            {isPressed ? (
              <Icon name="arrow-back-outline" size={24} color={Colors.white} />
            ) : (
              <Text style={styles.symbol}>{he.decode(symbol)}</Text>
            )}
          </Animated.View>
        </GestureDetector>
      </LinearGradient>
    </GestureHandlerRootView>
  );
};

export default CurrencyCard;
