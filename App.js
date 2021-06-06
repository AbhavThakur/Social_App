import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app/navigation/AppNavigation';
import codePush from 'react-native-code-push';

const CODE_PUSH_Options = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};
const App = () => {
  useEffect(() => {
    codePush.sync(
      {installMode: codePush.InstallMode.IMMEDIATE},
      syncwithCodePush,
      null,
    );
  });

  const syncwithCodePush = status => {
    console.log(status);
  };
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default codePush(CODE_PUSH_Options)(App);
