import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Welcome from '../screens/Welcome';
import Payment from '../screens/Payment';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      mode="modal"
      //   screenOptions={{headerShown: false}}
      initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Pay" component={Payment} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
