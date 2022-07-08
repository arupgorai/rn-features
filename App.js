import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Icon from './constant/icons';

export default function () {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View>
        <Text
          style={{
            fontSize: 30,
            color: '#20315f',
            fontFamily: 'Roboto-BoldItalic',
          }}>
          React Native
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontFamily: 'Roboto-Italic',
          }}>
          Let's Begin
        </Text>
        <Icon
          type="MaterialIcons"
          name="arrow-forward-ios"
          size={22}
          color="white"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
