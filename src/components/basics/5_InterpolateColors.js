import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated';

const InterPolateColor = () => {
  const animation = useSharedValue(0);
  const animateColor = useDerivedValue(() =>
    interpolateColor(animation.value, [0, 1], ['#631d93', '#399915']),
  );

  const rStyle = useAnimatedStyle(() => ({
    backgroundColor: animateColor.value,
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          animation.value = withTiming(1, {duration: 1000});
        }}>
        <Animated.View
          style={[{width: 150, height: 150, backgroundColor: 'blue'}, rStyle]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default InterPolateColor;
