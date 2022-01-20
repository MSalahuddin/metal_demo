import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CreatePin,
  Login,
  OTP,
  CreateUserName,
  EnterPin,
  UserNickName,
  ScanBiometric,
  OnboardingScreen,
  PhoneNo,
  Beneficiaries,
  TransferProcessed,
  TransactionDetails,
} from '../../containers';
import {SCREENS} from '../../constant/constant';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none" initialRouteName={SCREENS.TRANSACTION_DETAILS}>
    <AuthStack.Screen name={SCREENS.LOGIN} component={Login} />
    <AuthStack.Screen name={SCREENS.ENTER_PIN} component={EnterPin} />
    <AuthStack.Screen name={SCREENS.OTP} component={OTP} />
    <AuthStack.Screen name={SCREENS.CREATE_PIN} component={CreatePin} />
    <AuthStack.Screen
      name={SCREENS.CREATE_USER_NAME}
      component={CreateUserName}
    />
    <AuthStack.Screen name={SCREENS.ENTER_USER_NAME} component={UserNickName} />
    <AuthStack.Screen name={SCREENS.ONBOARDING} component={OnboardingScreen} />
    <AuthStack.Screen name={SCREENS.SCAN_BIOMETRIC} component={ScanBiometric} />
    <AuthStack.Screen name={SCREENS.PHONE_NO} component={PhoneNo} />
    <AuthStack.Screen name={SCREENS.Beneficiaries} component={Beneficiaries} />
    <AuthStack.Screen name={SCREENS.TRANSFER_PROCESSED} component={TransferProcessed} />
    <AuthStack.Screen name={SCREENS.TRANSACTION_DETAILS} component={TransactionDetails} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
