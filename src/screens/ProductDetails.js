import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Product Detail Screen</Text>
      <TouchableOpacity onPress={navigation.goBack}>
        <Text>go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
