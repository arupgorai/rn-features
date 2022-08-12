import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
const {width, height} = Dimensions.get('window');

const Product = ({sharedElementPrefix, product, containerStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={[{paddingBottom: 10}, containerStyle]}
      onPress={onPress}>
      <View style={[styles.container]}>
        <SharedElement
          id={`${sharedElementPrefix}-ProductDetails-Bg-${product?.id}`}
          style={[StyleSheet.absoluteFillObject]}>
          <Image
            source={product.image}
            style={styles.bgImage}
            resizeMode="cover"
          />
        </SharedElement>
      </View>
      <SharedElement
        id={`${sharedElementPrefix}-ProductDetails-Title-${product?.id}`}
        style={[StyleSheet.absoluteFillObject]}>
        <Text style={styles.productName}>{product.name}</Text>
      </SharedElement>
      <View style={styles.dateTime}>
        <Text style={styles.date}>{product.date}</Text>
        <Text style={[styles.date, {marginLeft: 4}]}>{product.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 15 * 2 - 10) / 2,
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  productName: {
    fontSize: 16,
    color: 'white',
    position: 'absolute',
    bottom: 35,
    left: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  dateTime: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  date: {
    fontSize: 10,
    color: '#FFF',
  },
});
