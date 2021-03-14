// import node_modules
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import { LikeScreen } from '../../containers/Like';

// import others
import { PREFERENCES_ICON, PREFERENCES_ACTIVE_ICON } from '../../../assets/images/BottomTabNavigator';
import { LIKE_SCREEN } from '../../constants/StackNavigation';

// main
const Stack = createStackNavigator();

export const IconTabLike = ({ focused }) => (
  <Image source={focused ? PREFERENCES_ACTIVE_ICON : PREFERENCES_ICON} style={styles.preferencesIcon} />
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
