import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
  SelectPurpose,
  TransferProcessed,
  Beneficiaries,

  ProceedPayment,
  BeneficiaryCardDetail
} from '../../containers';
import { SCREENS } from '../../constant/constant';


const AppStack = createStackNavigator();
const AppStackScreen = () => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName={SCREENS.TRANSFER_PROCESSED}>
      <AppStack.Screen name={SCREENS.HOME} component={Home} />
      <AppStack.Screen name= {SCREENS.SELECT_PURPOSE} component={SelectPurpose} />
      <AppStack.Screen name= {SCREENS.BENEFICIARIES} component={Beneficiaries} />
      <AppStack.Screen name= {SCREENS.TRANSFER_PROCESSED} component={TransferProcessed} />
      <AppStack.Screen name= {SCREENS.PROCEED_PAYMENT} component={ProceedPayment} />
      <AppStack.Screen name= {SCREENS.BENEFICIARY_CARD_DETAIL} component={BeneficiaryCardDetail} />

    </AppStack.Navigator>
  );
};

export default AppStackScreen;
