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
  AddBeneficiary,
  BeneficiaryPicture,
} from '../../containers';
import { SCREENS } from '../../constant/constant';


const AppStack = createStackNavigator();
const AppStackScreen = () => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName={SCREENS.BENEFICIARY_PICTURE}>
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
      <AppStack.Screen name= {SCREENS.ADD_BENEFICIARY} component={AddBeneficiary} />
      <AppStack.Screen name= {SCREENS.BENEFICIARY_PICTURE} component={BeneficiaryPicture} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
