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
  Easing,
} from 'react-native-reanimated';

const EasingExample = () => {
  const progress = useSharedValue(-250);

  const translateY = useAnimatedStyle(() => ({
    transform: [{translateY: progress.value}],
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          progress.value = withTiming(250, {
            duration: 2000,
            // easing: Easing.bounce,
            //   easing: Easing.bezier(0.2, 0.1, 1, 0.55),
            easing: Easing.circle,
          });
        }}>
        <Animated.View
          style={[{backgroundColor: 'blue', width: 50, height: 50}, translateY]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default EasingExample;
