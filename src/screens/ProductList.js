import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {data} from '../constants/data';

console.log('data :-', data);

const ProductList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Product List Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
        <Text>details screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
