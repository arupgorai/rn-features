import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChooseAccount, ForgotPassword, Login, Register, SetPassword } from '../screens';
import { navigations } from '../constants';

const { LOGIN, REGISTER, SET_PASSWORD, FORGOT_PASSWORD, CHOOSE_ACCOUNT } = navigations;
const AuthStack = createNativeStackNavigator();

const AuthStackFn = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name={LOGIN} component={Login} />
    <AuthStack.Screen name={REGISTER} component={Register} />
    <AuthStack.Screen name={SET_PASSWORD} component={SetPassword} />
    <AuthStack.Screen name={FORGOT_PASSWORD} component={ForgotPassword} />
    <AuthStack.Screen name={CHOOSE_ACCOUNT} component={ChooseAccount} />
  </AuthStack.Navigator>
);

export default AuthStackFn;
