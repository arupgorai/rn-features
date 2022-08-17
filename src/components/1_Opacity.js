import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

const Opacity = () => {
  const animation = useSharedValue(1);
  const rStyle = useAnimatedStyle(() => ({
    opacity: withTiming(animation.value, {duration: 3000}, () => {
      animation.value = 1;
    }),
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[{width: 150, height: 150, backgroundColor: 'blue'}, rStyle]}
      />
      <TouchableOpacity onPress={() => (animation.value = 0)}>
        <Text>animate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Opacity;
