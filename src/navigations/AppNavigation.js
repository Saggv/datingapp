// import node_modules
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import componentss
import AuthLoadingScreen from './AuthLoading';

// main
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AuthLoadingScreen />
    </NavigationContainer>
  );
};

export default AppNavigation;
