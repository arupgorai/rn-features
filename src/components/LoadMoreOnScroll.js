import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const LoadMoreOnScroll = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  const getData = async () => {
    setIsLoading(true);
    console.log('getData CALLED');
    const apiURL = `${BASE_URL}/photos?_limit=10&_page=${pageNo}`;

    try {
      const resJSON = await fetch(apiURL);
      const response = await resJSON.json();
      setData(data.concat(response));
    } catch (error) {
      console.log('Error :-', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemRow}>
        <Image source={{uri: item.url}} style={styles.itemImage} />
        <Text style={styles.itemText}>
          {item.id}. {item.title}
        </Text>
      </View>
    );
  };

  const renderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const handleMore = () => {
    setPageNo(prevState => prevState + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    // API Call here
    getData();
  }, [pageNo]);

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={renderFooter}
      onEndReached={handleMore}
      onEndReachedThreshold={0.5}
      refreshing={isLoading}
      onRefresh={getData}
    />
  );
};

export default LoadMoreOnScroll;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f5fcff',
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold',
    color: '#000',
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});
