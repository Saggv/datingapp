// import node_modules
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import components
import {TutorialScreen} from '../containers/Tutorial';

// import others
import {TUTORIAL} from '../constants/StackNavigation';

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
    </Stack.Navigator>
  );
};
