// import node_modules
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import { ProfileScreen } from '../../containers/Profile';

// import others
import { PROFILE_ICON, PROFILE_ACTIVE_ICON } from '../../../assets/images/BottomTabNavigator';
import { PROFILE_SCREEN, SETTING_SCREEN } from '../../constants/StackNavigation';
import SettingScreen from '../../containers/Profile/setting';

// main
const Stack = createStackNavigator();

export const IconTabProfile = ({ focused }) => (
  <Image source={focused ? PROFILE_ACTIVE_ICON : PROFILE_ICON} style={styles.profileIcon} />
);

// Screen of tab home show tabs
export const ProfileVisibleTab = () => {
  return <Stack.Navigator>
    <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
    <Stack.Screen name={SETTING_SCREEN} component={SettingScreen} />
  </Stack.Navigator>;
};

// Screen of tab home hide tabs
export const getListScreenProfileHideTab = () => {
  return <></>;
};

const styles = StyleSheet.create({
  profileIcon: { width: 23, height: 25 },
});
