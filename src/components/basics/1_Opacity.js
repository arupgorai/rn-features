import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

const Opacity = () => {
  const animation = useSharedValue(1);
  const rStyle = useAnimatedStyle(() => ({
    opacity: withTiming(animation.value, {duration: 2000}, () => {
      animation.value = 1;
    }),
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback onPress={() => (animation.value = 0)}>
        <Animated.View
          style={[{width: 150, height: 150, backgroundColor: 'blue'}, rStyle]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Opacity;
