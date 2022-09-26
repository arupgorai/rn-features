import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

import { COLORS } from '../constants';

const Input = ({
  value,
  placeholder,
  label,
  labelStyle,
  containerStyle,
  onChangeText,
  inputStyle,
  rightComponent,
  ...rest
}) => (
  <View style={[styles.containerStyle, containerStyle]}>
    <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
    <View style={styles.inputWrap}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[styles.inputStyle, inputStyle]}
        {...rest}
      />
      {rightComponent}
    </View>
  </View>
);

export default Input;

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    borderRadius: moderateScale(4),
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    padding: moderateVerticalScale(8),
    fontSize: scale(16),
    color: COLORS.black80,
    flex: 1,
  },
  labelStyle: {
    fontSize: scale(14),
    color: COLORS.black50,
    paddingHorizontal: moderateVerticalScale(8),
  },
});
