import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import Opacity from './src/components/1_Opacity';
import TranslateX from './src/components/2_TranslateX';
import WidthAndHeight from './src/components/3_WidthAndHeight';
import Position from './src/components/4_Position';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const App = () => {
  return <Position />;
};

export default App;
