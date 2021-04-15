// import node_modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import { TutorialScreen } from '../containers/Tutorial';
import { LogSignInScreen } from '../containers/Login';
import { LoginScreen } from '../containers/Login/Login';
import { SignUpScreen } from '../containers/Signup';
import { OTPSignUpScreen } from '../containers/Signup/OTPSignUp';
import { SignUpStep2 } from '../containers/Signup/sign-step-2';
import { ChatDetail } from '../containers/Message/ChatDetail';
import { UserInfoScreen } from '../containers/Signup/userInfo';
import { EditProfileScreen } from '../containers/Signup/Profile';

// import others
import { TUTORIAL, LOGIN, SIGNUP, OPTSIGNUP, LOGSIGNINSCREEN, CHAT_DETAIL, SIGNUPSTEP2, USER_INFO, EDIT_PROFILE } from '../constants/StackNavigation';

// main
const Stack = createStackNavigator();
export const AuthStack = () => {
  const showHeaders = ['PrivacyPolicy', 'TermsOfService', SIGNUPSTEP2];
  return (
    <Stack.Navigator
      initialRouteName={TUTORIAL}
      screenOptions={({ route }) => ({
        headerShown: showHeaders.includes(route.name),
        headerTintColor: '#000',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#fff' },
      })}
    >
      <Stack.Screen name={TUTORIAL} component={TutorialScreen} />
      <Stack.Screen name={LOGSIGNINSCREEN} component={LogSignInScreen} />
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP} component={SignUpScreen} />
      <Stack.Screen name={OPTSIGNUP} component={OTPSignUpScreen} />
      <Stack.Screen name={SIGNUPSTEP2} component={SignUpStep2}   options={{ title: 'Password' }} />
      <Stack.Screen name={CHAT_DETAIL} component={ChatDetail} />
      <Stack.Screen name={USER_INFO} component={UserInfoScreen} />
      <Stack.Screen name={EDIT_PROFILE} component={EditProfileScreen} />
    </Stack.Navigator>
  );
};
