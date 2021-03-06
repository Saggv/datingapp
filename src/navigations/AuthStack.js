// import node_modules
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import components
import {TutorialScreen} from '../containers/Tutorial';
import {LogSignInScreen} from '../containers/login';
import {LoginScreen} from '../containers/login/Login';
import {SignUpScreen} from '../containers/signup';
import { OPTSignUpScreen } from '../containers/signup/OPTSignUp';

// import others
import {TUTORIAL, LOGIN, SIGNUP, OPTSIGNUP, LOGSIGNINSCREEN} from '../constants/StackNavigation';

// main
const Stack = createStackNavigator();
export const AuthStack = () => {
  const showHeaders = ['PrivacyPolicy', 'TermsOfService'];
  return (
    <Stack.Navigator
      initialRouteName={TUTORIAL}
      screenOptions={({route}) => ({
        headerShown: showHeaders.includes(route.name),
        headerTintColor: '#000',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#fff'},
      })}>
      <Stack.Screen name={TUTORIAL} component={TutorialScreen} />
      <Stack.Screen name={LOGSIGNINSCREEN} component={LogSignInScreen} />
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP} component={SignUpScreen} />
      <Stack.Screen name={OPTSIGNUP} component={OPTSignUpScreen} />
    </Stack.Navigator>
  );
};
