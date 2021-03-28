// import node_modules
import React, {useEffect}  from 'react';
import {useSelector } from 'react-redux'
// import components
import { AuthStack } from './AuthStack';
import MainNavigationProvider from './MainNavigationProvider';

const AuthLoadingScreen = () => {
  const {isLoggedIn}= useSelector(state => state.auth);

  console.log(isLoggedIn + 'auth');

  useEffect(() => {}, [isLoggedIn]);

  if(!isLoggedIn){
  return   <AuthStack />
  }

  return  <MainNavigationProvider />;
};

export default AuthLoadingScreen;
