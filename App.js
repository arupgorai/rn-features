import React from 'react';
import {View, Text, Dimensions} from 'react-native';

/*
import {
  Opacity,
  TranslateX,
  WidthAndHeight,
  Position,
  InterPolateColor,
  Rotations,
  AbsolutePosition,
  Scale,
  WidthAndHeightPercentage,
  WithSpringExample,
  EasingExample,
} from './src/components/basics';
*/
import HideHeaderOnScroll from './src/components/hide-header-on-scroll';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const App = () => {
  return <HideHeaderOnScroll />;
};

export default App;
