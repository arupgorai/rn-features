import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Icon from './src/constant/icons';
import GameOn from './src/assets/images/misc/gaming.svg';

export default function () {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 30,
            color: '#20315f',
            fontFamily: 'Roboto-BoldItalic',
          }}>
          React Native
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <GameOn
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 5,
          marginBottom: 40,
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
