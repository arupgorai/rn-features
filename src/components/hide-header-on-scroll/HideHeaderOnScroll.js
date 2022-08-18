import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {styles} from './styles.header';

const HideHeaderOnScroll = () => {
  return (
    <View style={styles.container}>
      <Text>container</Text>
    </View>
  );
};

export default HideHeaderOnScroll;
