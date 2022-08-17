import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const ModalBox = ({filterModalSharedValue1, filterModalSharedValue2}) => {
  const filterModalContainerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      filterModalSharedValue1.value,
      [SCREEN_HEIGHT, 0],
      [0, 1],
    ),
    transform: [{translateY: filterModalSharedValue1.value}],
  }));

  const filterModalBackgroundAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      filterModalSharedValue2.value,
      [SCREEN_HEIGHT, 0],
      [0, 1],
    ),
  }));

  const filterModalContentAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      filterModalSharedValue2.value,
      [SCREEN_HEIGHT, 0],
      [0, 1],
    ),
    transform: [{translateY: filterModalSharedValue2.value}],
  }));

  const closeModalBox = () => {
    filterModalSharedValue2.value = withTiming(SCREEN_HEIGHT, {
      duration: 500,
    });
    filterModalSharedValue1.value = withDelay(
      500,
      withTiming(SCREEN_HEIGHT, {duration: 100}),
    );
  };

  return (
    <Animated.View
      style={[styles.mainContainer, filterModalContainerAnimatedStyle]}>
      <TouchableWithoutFeedback onPress={closeModalBox}>
        <Animated.View
          style={[
            styles.backgroundContainer,
            filterModalBackgroundAnimatedStyle,
          ]}
        />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[styles.contentContainer, filterModalContentAnimatedStyle]}>
        <View style={styles.headerWrap}>
          <Text>Header</Text>
          <TouchableOpacity onPress={closeModalBox}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentWrap}>
          <Text>Content</Text>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default ModalBox;

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 0,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  backgroundContainer: {
    flex: 1,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 0,
    height: SCREEN_HEIGHT * 0.9,
    width: SCREEN_WIDTH,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
  },
  headerWrap: {
    marginTop: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentWrap: {
    borderWidth: 1,
    borderColor: 'blue',
    flex: 1,
    padding: 15,
  },
});
