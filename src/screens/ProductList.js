import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

import {Product} from '../components';
import {data} from '../constants/data';

const ProductList = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={data}
          keyExtractor={item => `Nature-${item.id}`}
          renderItem={({item, index}) => (
            <Product
              sharedElementPrefix="ProductList"
              product={item}
              navigation={navigation}
              onPress={() =>
                navigation.navigate('ProductDetails', {
                  product: item,
                  sharedElementPrefix: 'ProductList',
                })
              }
              containerStyle={{marginLeft: (index + 1) % 2 === 0 && 10}}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
