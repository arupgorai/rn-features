import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
