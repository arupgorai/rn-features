import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  withDelay,
} from 'react-native-reanimated';

const WidthAndHeight = () => {
  const animation = useSharedValue({width: 150, height: 150});

  const rStyle = useAnimatedStyle(() => ({
    width: withTiming(animation.value.width, {duration: 2000}),
    height: withDelay(
      2000,
      withTiming(animation.value.height, {duration: 2000}),
    ),
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          animation.value = {width: 300, height: 300};
        }}>
        <Animated.View style={[{backgroundColor: 'blue'}, rStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default WidthAndHeight;
