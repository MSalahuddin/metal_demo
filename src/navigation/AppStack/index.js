import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
  SelectPurpose,
  TransferProcessed,
  Beneficiaries,
  TransactionDetails,

  PaymentForm,
  ProceedPayment,
  BeneficiaryCardDetail,
  TransactionHistory,
  TransferDetail,
  AccountInformation
} from '../../containers';
import { SCREENS } from '../../constant/constant';


const AppStack = createStackNavigator();
const AppStackScreen = () => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName={SCREENS.ACCOUNT_INFORMATION}>
      <AppStack.Screen name={SCREENS.HOME} component={Home} />
      <AppStack.Screen name= {SCREENS.SELECT_PURPOSE} component={SelectPurpose} />
      <AppStack.Screen name= {SCREENS.BENEFICIARIES} component={Beneficiaries} />
      <AppStack.Screen name= {SCREENS.TRANSACTION_DETAILS} component={TransactionDetails} />
      <AppStack.Screen name= {SCREENS.TRANSFER_PROCESSED} component={TransferProcessed} />
      <AppStack.Screen name= {SCREENS.PROCEED_PAYMENT} component={ProceedPayment} />
      <AppStack.Screen name= {SCREENS.BENEFICIARY_CARD_DETAIL} component={BeneficiaryCardDetail} />
      <AppStack.Screen name= {SCREENS.PAYMENT_FORM} component={PaymentForm} />
      <AppStack.Screen name= {SCREENS.TRANSACTION_HISTORY} component={TransactionHistory} />
      <AppStack.Screen name= {SCREENS.TRANSFER_DETAIL} component={TransferDetail} />
      <AppStack.Screen name= {SCREENS.ACCOUNT_INFORMATION} component={AccountInformation} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
