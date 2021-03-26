// import node_modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import { TutorialScreen } from '../containers/Tutorial';
import { LogSignInScreen } from '../containers/Login';
import { LoginScreen } from '../containers/Login/Login';
import { SignUpScreen } from '../containers/Signup';
import { OTPSignUpScreen } from '../containers/Signup/OTPSignUp';
import { HomeScreen } from '../containers/Home';
import {ChatDetail} from '../containers/Message/ChatDetail';

// import others
import { TUTORIAL, LOGIN, SIGNUP, OPTSIGNUP, LOGSIGNINSCREEN, HOME_SCREEN, CHAT_DETAIL} from '../constants/StackNavigation';

// main
const Stack = createStackNavigator();
export const AuthStack = () => {
  const showHeaders = [ 'PrivacyPolicy', 'TermsOfService' ];
  return (
    <Stack.Navigator
      initialRouteName={TUTORIAL}
      screenOptions={({ route }) => ({
        headerShown: showHeaders.includes(route.name),
        headerTintColor: '#000',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#fff' },
      })}>
      <Stack.Screen name={TUTORIAL} component={TutorialScreen} />
      <Stack.Screen name={LOGSIGNINSCREEN} component={LogSignInScreen} />
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP} component={SignUpScreen} />
      <Stack.Screen name={OPTSIGNUP} component={OTPSignUpScreen} />
      {/* <Stack.Screen name={HOME_SCREEN} component={HomeScreen} /> */}
      <Stack.Screen name={CHAT_DETAIL} component={ChatDetail} />
    </Stack.Navigator>
  );
};
