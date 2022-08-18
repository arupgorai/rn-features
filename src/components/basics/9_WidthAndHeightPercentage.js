import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  withDelay,
  useDerivedValue,
  interpolate,
} from 'react-native-reanimated';

const WidthAndHeightPercentage = () => {
  const progress = useSharedValue(0);

  const width = useDerivedValue(() =>
    interpolate(progress.value, [0, 1], [20, 80]),
  );
  const height = useDerivedValue(() =>
    interpolate(progress.value, [0, 1], [20, 80]),
  );

  const rStyle = useAnimatedStyle(() => ({
    width: width.value + '%',
    height: height.value + '%',
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          progress.value = withTiming(1, {duration: 2000});
        }}>
        <Animated.View style={[{backgroundColor: 'blue'}, rStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default WidthAndHeightPercentage;
