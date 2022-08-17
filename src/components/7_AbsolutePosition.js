import React from 'react';
import {View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useDerivedValue,
  interpolateColor,
  interpolate,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const AbsolutePosition = () => {
  const progress = useSharedValue({
    top: 0,
    left: 0,
  });

  const rStyle = useAnimatedStyle(() => ({
    top: withTiming(progress.value.top, {duration: 2000}),
    left: withTiming(progress.value.left, {duration: 2000}),
  }));

  return (
    <View style={{flex: 1}}>
      <TouchableWithoutFeedback
        onPress={() => {
          progress.value = {top: height - 150, left: width - 150};
        }}>
        <Animated.View
          style={[
            {
              width: 150,
              height: 150,
              backgroundColor: 'blue',
              position: 'absolute',
            },
            rStyle,
          ]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AbsolutePosition;
