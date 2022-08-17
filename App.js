import React from 'react';
import {View, Text, Button, Dimensions} from 'react-native';
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
import ModalBox from './src/components/ModalBox';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const App = () => {
  const filterModalSharedValue1 = useSharedValue(SCREEN_HEIGHT);
  const filterModalSharedValue2 = useSharedValue(SCREEN_HEIGHT);

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello arup</Text>
        <Button
          title="Open Modal"
          onPress={() => {
            filterModalSharedValue1.value = withTiming(0, {duration: 100});
            filterModalSharedValue2.value = withDelay(
              100,
              withTiming(0, {duration: 500}),
            );
          }}
        />
      </View>
      <ModalBox
        filterModalSharedValue1={filterModalSharedValue1}
        filterModalSharedValue2={filterModalSharedValue2}
      />
    </>
  );
};

export default App;
