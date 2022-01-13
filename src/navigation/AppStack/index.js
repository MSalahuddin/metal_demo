import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
} from '../../containers';

import {SCREENS} from "../../constant/constant";

const AppStack = createStackNavigator();
const AppStackScreen = () => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName={SCREENS.HOME}>
      <AppStack.Screen name={SCREENS.HOME} component={Home} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
