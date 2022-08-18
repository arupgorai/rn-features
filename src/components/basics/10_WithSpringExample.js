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

const WithSpringExample = () => {
  const progress = useSharedValue(0);

  const translateY = useAnimatedStyle(() => ({
    transform: [{translateY: progress.value}],
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          progress.value = withSpring(250, {
            damping: 10,
            mass: 1,
            stiffness: 100,
          });
        }}>
        <Animated.View
          style={[{backgroundColor: 'blue', width: 50, height: 50}, translateY]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default WithSpringExample;
