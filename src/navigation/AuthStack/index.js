import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  CreatePin,
  Login,
  OTP,
  UserName,
  EnterPin,
  UserNickName,
  ScanBiometric
} from '../../containers';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none" initialRouteName="ScanBiometric">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="EnterPin" component={EnterPin} />
    <AuthStack.Screen name="OTP" component={OTP} />
    <AuthStack.Screen name="CreatePin" component={CreatePin} />
    <AuthStack.Screen name="UserName" component={UserName} />
    <AuthStack.Screen name="UserNickName" component={UserNickName} />
    <AuthStack.Screen name="ScanBiometric" component={ScanBiometric} />
  </AuthStack.Navigator >
);

export default AuthStackScreen;
