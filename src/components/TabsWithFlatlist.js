import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {tabs} from '../../data';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const TAB_LIST = tabs.map(tab => ({...tab, ref: createRef()}));

const TabIndicator = ({measureLayout, scrollX}) => {
  const inputRange = TAB_LIST.map((_, index) => index * SCREEN_WIDTH);

  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.x),
  });

  return (
    <Animated.View
      style={[
        styles.indicatorStyle,
        {width: indicatorWidth, transform: [{translateX}]},
      ]}
    />
  );
};

const Tabs = ({scrollX, onPressTab}) => {
  const [measureLayout, setMeasureLayout] = useState([]);
  const containerRef = useRef();
  const tabPosition = Animated.divide(scrollX, SCREEN_WIDTH);

  useEffect(() => {
    let ml = [];

    TAB_LIST.forEach(tab => {
      tab?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({x, y, width, height});

          if (ml.length === TAB_LIST.length) {
            setMeasureLayout(ml);
          }
        },
      );
    });
  }, [containerRef.current]);

  return (
    <View style={{flex: 1, flexDirection: 'row'}} ref={containerRef}>
      {/* Tab  */}
      {TAB_LIST.map((tab, index) => {
        const textColor = tabPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: ['#245ab3', '#ab170c', '#245ab3'],
          extrapolate: 'clamp',
        });

        return (
          <TouchableOpacity
            ref={tab.ref}
            key={`Tab-${index}`}
            onPress={() => onPressTab(index)}
            style={styles.tabItem}>
            <Animated.Text style={{color: textColor}}>
              {tab.label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}

      {/* Tab Indicator  */}
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}
    </View>
  );
};

const TabsWithFlatlist = () => {
  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const onPressTab = useCallback(tabIndex => {
    flatListRef?.current?.scrollToOffset({offset: tabIndex * SCREEN_WIDTH});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabsHeader}>
        <Tabs scrollX={scrollX} onPressTab={onPressTab} />
      </View>
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SCREEN_WIDTH}
        decelerationRate="fast"
        keyboardDismissMode="on-drag"
        showsHorizontalScrollIndicator={false}
        data={TAB_LIST}
        keyExtractor={item => `Tabs-${item.id}`}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => (
          <View style={{width: SCREEN_WIDTH}}>
            {index === 0 && (
              <View style={styles.tabContentWrap}>
                <Text>{item.label}</Text>
              </View>
            )}
            {index === 1 && (
              <View style={styles.tabContentWrap}>
                <Text>{item.label}</Text>
              </View>
            )}
            {index === 2 && (
              <View style={styles.tabContentWrap}>
                <Text>{item.label}</Text>
              </View>
            )}
            {index === 3 && (
              <View style={styles.tabContentWrap}>
                <Text>{item.label}</Text>
              </View>
            )}
            {index === 4 && (
              <View style={styles.tabContentWrap}>
                <Text>{item.label}</Text>
              </View>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default TabsWithFlatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContentWrap: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  tabsHeader: {
    height: 60,
    borderWidth: 1,
    borderColor: '#d5d5d5',
    overflow: 'scroll',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorStyle: {
    position: 'absolute',
    bottom: 0,
    height: 4,
    borderRadius: 8,
    backgroundColor: 'red',
  },
});
