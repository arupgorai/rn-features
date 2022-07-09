import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const LoadMoreOnScroll = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [searchText, setSearchText] = useState('');

  let listViewRef;

  const getData = async () => {
    // avoid making api call if searchText exist for filter
    if (!!searchText) return null;
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

  const searchFilter = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredData(newData);
      setSearchText(text);
    } else {
      setFilteredData(data);
      setSearchText(text);
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

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const handleMore = () => {
    if (!!searchText) return null;
    setPageNo(prevState => prevState + 1);
    setIsLoading(true);
  };

  const goToBottom = () => {
    listViewRef.scrollToEnd({animated: true});
  };

  const goToTop = () => {
    listViewRef.scrollToOffset({offset: 0, animated: true});
  };

  useEffect(() => {
    // API Call here
    getData();
  }, [pageNo]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <>
      <FlatList
        style={styles.container}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.inputWrap}>
            <TextInput
              value={searchText}
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              placeholder="Search"
              onChangeText={searchFilter}
              style={styles.inputStyle}
            />
            <TouchableOpacity onPress={goToBottom}>
              <Text style={styles.topBtn}>Bottom</Text>
            </TouchableOpacity>
          </View>
        }
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSeparator}
        onEndReached={handleMore}
        onEndReachedThreshold={0.5}
        refreshing={isLoading}
        onRefresh={getData}
        stickyHeaderIndices={[0]}
        ref={ref => (listViewRef = ref)}
      />
      <TouchableOpacity onPress={goToTop} style={styles.bottomBtn}>
        <Text style={styles.topBtn}>top</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoadMoreOnScroll;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f5fcff',
  },
  itemRow: {
    // borderBottomColor: '#ccc',
    // marginBottom: 10,
    // borderBottomWidth: 1,
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
  inputWrap: {
    paddingHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
    height: Platform.OS === 'ios' ? 40 : 35,
  },
  separator: {
    height: 2,
    backgroundColor: 'green',
    width: '100%',
    marginVertical: 10,
  },
  topBtn: {
    fontSize: 14,
    marginLeft: 6,
  },
  bottomBtn: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
});
