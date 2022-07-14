import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Config from 'react-native-config';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Environment :- {Config.ENV}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
