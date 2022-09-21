import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens';
import { navigations } from '../constants';

const { HOME } = navigations;
const HomeStack = createNativeStackNavigator();

const HomeStackFn = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name={HOME} component={Home} />
  </HomeStack.Navigator>
);

export default HomeStackFn;
