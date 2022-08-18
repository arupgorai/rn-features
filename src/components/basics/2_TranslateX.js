import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

const TranslateX = () => {
  const animation = useSharedValue(0);
  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(animation.value, {duration: 2000}, () => {
          animation.value = 0;
        }),
      },
    ],
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback onPress={() => (animation.value = 150)}>
        <Animated.View
          style={[{width: 150, height: 150, backgroundColor: 'blue'}, rStyle]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TranslateX;
