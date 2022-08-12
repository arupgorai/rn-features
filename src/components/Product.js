import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Product = () => {
  return (
    <View style={styles.container}>
      <Text>Product Component</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
