import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Welcome to React Native</Text>
        <Text style={styles.subHeading}>Features List</Text>
      </View>
      <ScrollView style={styles.listContainer}>
        <View style={styles.listContainerWrap}>
          <View style={styles.itemWrap}>
            <Text style={styles.featureItem}>1. React Navit Vector Icons</Text>
            <Text style={styles.branchName}>RNVectorIcons</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#e2e2e2',
    paddingVertical: 20,
  },
  heading: {
    fontSize: 52,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
  },
  subHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'tomato',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  listContainer: {
    height: '100%',
  },
  listContainerWrap: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  itemWrap: {
    marginBottom: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featureItem: {
    fontSize: 14,
  },
  branchName: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
