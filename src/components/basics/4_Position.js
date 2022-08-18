import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

const Position = () => {
  const animation = useSharedValue(1);
  const rStyle = useAnimatedStyle(() => ({
    opacity: animation.value,
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          animation.value = withTiming(0, {duration: 2000});
        }}>
        <Animated.View
          style={[{width: 150, height: 150, backgroundColor: 'blue'}, rStyle]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Position;
