import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import Opacity from './src/components/1_Opacity';
import TranslateX from './src/components/2_TranslateX';
import WidthAndHeight from './src/components/3_WidthAndHeight';
import Position from './src/components/4_Position';
import InterPolateColor from './src/components/5_InterpolateColors';
import Rotations from './src/components/6_Rotation';
import AbsolutePosition from './src/components/7_AbsolutePosition';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const App = () => {
  return <AbsolutePosition />;
};

export default App;
