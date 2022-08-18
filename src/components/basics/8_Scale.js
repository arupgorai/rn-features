import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  useDerivedValue,
} from 'react-native-reanimated';

const Scale = () => {
  const progress = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(
          progress.value,
          {duration: 2000},
          () => (progress.value = 1),
        ),
      },
    ],
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          progress.value = 2;
        }}>
        <Animated.View
          style={[{width: 150, height: 150, backgroundColor: 'blue'}, rStyle]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Scale;
