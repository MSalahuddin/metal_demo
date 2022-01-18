import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
  SelectPurpose,
  ProceedPayment,
  BeneficiaryCardDetail
} from '../../containers';
import { SCREENS } from '../../constant/constant';

const AppStack = createStackNavigator();
const AppStackScreen = () => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName={SCREENS.BENEFICIARY_CARD_DETAIL}>
      <AppStack.Screen name={SCREENS.HOME} component={Home} />
      <AppStack.Screen name= {SCREENS.SELECT_PURPOSE} component={SelectPurpose} />
      <AppStack.Screen name= {SCREENS.PROCEED_PAYMENT} component={ProceedPayment} />
      <AppStack.Screen name= {SCREENS.BENEFICIARY_CARD_DETAIL} component={BeneficiaryCardDetail} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
