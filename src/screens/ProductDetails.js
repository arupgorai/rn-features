import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const ProductDetails = ({navigation, route}) => {
  const {product, sharedElementPrefix} = route.params;

  const renderHeader = () => {
    return (
      <View style={[styles.headerWrap]}>
        <SharedElement
          id={`${sharedElementPrefix}-ProductDetails-Bg-${product?.id}`}
          style={[StyleSheet.absoluteFillObject]}>
          <Image source={product?.image} style={styles.headerImage} />
        </SharedElement>

        <SharedElement
          id={`${sharedElementPrefix}-ProductDetails-Title-${product?.id}`}
          style={[StyleSheet.absoluteFillObject]}>
          <Text style={styles.productName}>{product.name}</Text>
        </SharedElement>

        <TouchableOpacity
          style={styles.backBtnWrap}
          onPress={navigation.goBack}>
          <Text style={styles.backBtnText}> {'<'} </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return <View style={styles.container}>{renderHeader()}</View>;
};

export default ProductDetails;

ProductDetails.sharedElements = (route, otherRoute, showing) => {
  const {product, sharedElementPrefix} = route.params;

  return [
    {id: `${sharedElementPrefix}-ProductDetails-Bg-${product?.id}`},
    {id: `${sharedElementPrefix}-ProductDetails-Title-${product?.id}`},
  ];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    overflow: 'hidden',
    borderWidth: 1,
  },
  headerImage: {
    height: '100%',
    width: '100%',
  },
  productName: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: 50,
    textAlign: 'center',
    alignSelf: 'center',
  },
  backBtnWrap: {
    position: 'absolute',
    top: 50,
    left: 15,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtnText: {
    fontSize: 24,
    color: '#555',
  },
});
