import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from './constant/icons';

export default function () {
  return (
    <SafeAreaView>
      <View>
        <Text>React Native</Text>
        {/* <Icon name="md-menu" size={30} /> */}
        {/* <Icon2 name="menu" size={30} /> */}
        <Icon
          type="Entypo"
          name="chevron-small-down"
          size={25}
          color="red"
          style={{marginTop: 10}}
        />
      </View>
    </SafeAreaView>
  );
}
