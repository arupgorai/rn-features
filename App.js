import React from 'react';
import {Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {ProductList, ProductDetails} from './src/screens';

const options = {
  gestureEnabled: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      },
    },
  },
  cardStyleInterpolator: ({current: {progress}}) => ({
    cardStyle: {
      opacity: progress,
    },
  }),
};

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductList"
        screenOptions={{headerShown: false, useNativeDriver: true}}
        detachInactiveScreens={false}>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={() => options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
