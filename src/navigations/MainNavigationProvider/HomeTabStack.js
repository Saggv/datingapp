// import node_modules
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import { HomeScreen } from '../../containers/Home';

// import others
import { HOME_ICON, HOME_ACTIVE_ICON } from '../../../assets/images/BottomTabNavigator';
import { HOME_SCREEN, HOME_DETAIL } from '../../constants/StackNavigation';
import {HomeDetail} from '../../containers/Home/detail';

// main
const Stack = createStackNavigator();

export const IconTabHome = ({ focused }) => (
  <Image source={focused ? HOME_ACTIVE_ICON : HOME_ICON} style={focused ? styles.homeActiveIcon : styles.homeIcon} />
);

// Screen of tab home show tabs
export const HomeStackVisibleTab = () => {
  return <Stack.Navigator>
    <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
    <Stack.Screen name={HOME_DETAIL} component={HomeDetail} />
  </Stack.Navigator>;
};

// Screen of tab home hide tabs
export const getListScreenHomeHideTab = () => {
  return <></>;
};

const styles = StyleSheet.create({
  homeIcon: { width: 21, height: 29 },
  homeActiveIcon: { width: 22, height: 30 },
});
