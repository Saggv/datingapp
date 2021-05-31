// import node_modules
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import { LikeScreen } from '../../containers/Like';

// import others
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LIKE_SCREEN } from '../../constants/StackNavigation';

// main
const Stack = createStackNavigator();

export const IconTabLike = ({ focused }) => (
  <MaterialCommunityIcons name={focused ? "heart-multiple" : "heart-multiple-outline"} size={28} color={focused ? '#FDAAA3' : '#333'} /> 
);

// Screen of tab home show tabs
export const LikeVisibleTab = () => {
  return <Stack.Navigator>
    <Stack.Screen name={LIKE_SCREEN} component={LikeScreen} />
  </Stack.Navigator>;
};

// Screen of tab home hide tabs
export const getListScreenLikeHideTab = () => {
  return <></>;
};

const styles = StyleSheet.create({
  preferencesIcon: { width: 32, height: 24 },
});
