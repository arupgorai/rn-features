import React, {Fragment, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ProgressOnScroll = () => {
  const [isLoading, setLoading] = useState(true);
  const [contentSizeHeight, setContentSizeHeight] = useState(0);
  const [layoutHeight, setLayoutHeight] = useState(0);

  const scrollY = useRef(new Animated.Value(0)).current;
  const SCROLLVIEW_CONTENT_HEIGHT = contentSizeHeight - layoutHeight;

  const animatedWidth = scrollY.interpolate({
    inputRange: [0, SCROLLVIEW_CONTENT_HEIGHT],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {/* Progress Bar  */}
      <View style={styles.progressBarOuter}>
        <Animated.View
          style={[styles.progressBarInner, {width: animatedWidth}]}
        />
      </View>

      {isLoading ? (
        <View style={[styles.loaderWrap, {height}]}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="purple" />
            <Text>Loading..</Text>
          </View>
        </View>
      ) : (
        <Animated.ScrollView
          style={styles.container}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false},
          )}
          // onScroll={e =>
          //   console.log('offset y :-', e.nativeEvent.contentOffset.y)
          // }
          onLayout={evt => {
            const {height} = evt.nativeEvent.layout;
            setLayoutHeight(Math.round(height));
          }}
          onContentSizeChange={(width, height) => {
            setContentSizeHeight(Math.round(height));
          }}
          scrollEventThrottle={16}>
          <Text style={styles.header}>Progress bar on scroll</Text>

          <Text style={styles.subHeader}>
            This Screen shows Progress bar up on header which increases on page
            scroll
          </Text>

          <View style={styles.card}>
            <Image
              source={{uri: 'https://loremflickr.com/640/360'}}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{uri: 'https://loremflickr.com/640/360'}}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{uri: 'https://loremflickr.com/640/360'}}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{uri: 'https://loremflickr.com/640/360'}}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{uri: 'https://loremflickr.com/640/360'}}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{uri: 'https://loremflickr.com/640/360'}}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{uri: 'https://loremflickr.com/640/360'}}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it
            </Text>
          </View>
        </Animated.ScrollView>
      )}
    </Fragment>
  );
};

export default ProgressOnScroll;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 25,
  },
  image: {
    width: '100%',
    height: 200,
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    marginBottom: 25,
  },
  text: {
    fontSize: 14,
    color: 'gray',
    padding: 10,
  },
  progressBarOuter: {
    width: '100%',
    height: 6,
    backgroundColor: 'lightgray',
  },
  progressBarInner: {
    height: '100%',
    backgroundColor: 'blue',
  },
  loadingBox: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loaderWrap: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
