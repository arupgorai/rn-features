import React, { useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { styles } from './styles.header';

const { width, height } = Dimensions.get('window');

const HideHeaderOnScroll = () => {
  const scrollViewRef = useRef();
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 55], [55, 0], Extrapolate.CLAMP),
    opacity: interpolate(scrollY.value, [0, 55], [1, 0], Extrapolate.CLAMP),
  }));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Animated.View style={[styles.headerWrap, headerAnimatedStyle]}>
          <View style={styles.header}>
            <Text style={styles.headerText}>header</Text>
          </View>
        </Animated.View>
        <Animated.ScrollView
          style={styles.scrollContainer}
          ref={scrollViewRef}
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          onScrollEndDrag={event => {
            if (event.nativeEvent.contentOffset.y > 10 && event.nativeEvent.contentOffset.y < 50) {
              scrollViewRef.current?.scrollTo({
                x: 0,
                y: 60,
                animated: true,
              });
            }
          }}
        >
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
          <Text>4</Text>
          <Text>5</Text>
          <Text>6</Text>
          <Text>7</Text>
          <Text>8</Text>
          <Text>9</Text>
          <Text>10</Text>
          <Text>11</Text>
          <Text>12</Text>
          <Text>13</Text>
          <Text>14</Text>
          <Text>15</Text>
          <Text>16</Text>
          <Text>17</Text>
          <Text>18</Text>
          <Text>19</Text>
          <Text>20</Text>
          <Text>21</Text>
          <Text>22</Text>
          <Text>23</Text>
          <Text>24</Text>
          <Text>25</Text>
          <Text>26</Text>
          <Text>27</Text>
          <Text>28</Text>
          <Text>29</Text>
          <Text>30</Text>
          <Text>31</Text>
          <Text>32</Text>
          <Text>33</Text>
          <Text>34</Text>
          <Text>35</Text>
          <Text>36</Text>
          <Text>37</Text>
          <Text>38</Text>
          <Text>39</Text>
          <Text>40</Text>
          <Text>41</Text>
          <Text>42</Text>
          <Text>43</Text>
          <Text>44</Text>
          <Text>45</Text>
          <Text>46</Text>
          <Text>47</Text>
          <Text>48</Text>
          <Text>49</Text>
          <Text>50</Text>
          <Text>50</Text>
          <Text>51</Text>
          <Text>52</Text>
          <Text>53</Text>
          <Text>54</Text>
          <Text>55</Text>
          <Text>56</Text>
          <Text>57</Text>
          <Text>58</Text>
          <Text>59</Text>
          <Text>60</Text>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HideHeaderOnScroll;
