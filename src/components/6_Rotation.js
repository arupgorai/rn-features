import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useDerivedValue,
  interpolateColor,
  interpolate,
} from 'react-native-reanimated';

const Rotations = () => {
  const animation = useSharedValue(0);

  const rotation = useDerivedValue(() =>
    interpolate(animation.value, [0, 360], [0, 360]),
  );

  const rStyle = useAnimatedStyle(() => ({
    transform: [{rotate: rotation.value + 'deg'}],
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          animation.value = withTiming(360, {duration: 2000});
        }}>
        <Animated.View
          style={[{width: 150, height: 150, backgroundColor: 'blue'}, rStyle]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Rotations;
