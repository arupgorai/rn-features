import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import User from './component/User';

const App = () => {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
};

export default App;
