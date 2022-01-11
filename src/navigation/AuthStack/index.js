import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CreatePin,
  Login,
  OTP,
  UserName,
  EnterPin,
  UserNickName,
  ScanBiometric,
  Onboarding,
} from '../../containers';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none" initialRouteName="Onboarding">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="EnterPin" component={EnterPin} />
    <AuthStack.Screen name="OTP" component={OTP} />
    <AuthStack.Screen name="CreatePin" component={CreatePin} />
    <AuthStack.Screen name="UserName" component={UserName} />
    <AuthStack.Screen name="UserNickName" component={UserNickName} />
    <AuthStack.Screen name="ScanBiometric" component={ScanBiometric} />
    <AuthStack.Screen name="Onboarding" component={Onboarding} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
