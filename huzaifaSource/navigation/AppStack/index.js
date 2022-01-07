import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home,
} from '../../containers';

const AppStack = createStackNavigator();
const AppStackScreen = () => {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName="Home">
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
