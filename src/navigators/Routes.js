import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStackFn from './AuthStack';

const AppNavigator = () => (
  <NavigationContainer>
    <AuthStackFn />
  </NavigationContainer>
);

export default AppNavigator;
