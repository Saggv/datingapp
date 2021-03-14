// import node_modules
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// import components

// import stacks
import { HomeStackVisibleTab, getListScreenHomeHideTab, IconTabHome } from './HomeTabStack';
import { LikeVisibleTab, getListScreenLikeHideTab, IconTabLike } from './LikeTabStack';
import { MessageVisibleTab, getListScreenMessageHideTab, IconTabMessage } from './MessageTabStack';
import { ProfileVisibleTab, getListScreenProfileHideTab, IconTabProfile } from './ProfileTabStack';

// import others
import { COMMON_HOME, COMMON_LIKE, COMMON_MESSAGE, COMMON_PROFILE } from '../../constants/StackNavigation';
import { HOME_SCREEN } from '../../constants/StackNavigation';

// main
const BottomTabBar = createBottomTabNavigator();
const Stack = createStackNavigator();

// Button Tabs bar
const BottomTabBarNavigator = () => {
  return <BottomTabBar.Navigator
    initialRouteName={COMMON_HOME}
    tabBarOptions={{
      showLabel: false,
    }}
  >
    <BottomTabBar.Screen
      name={COMMON_HOME}
      component={HomeStackVisibleTab}
      options={{ tabBarIcon: IconTabHome }} />
    <BottomTabBar.Screen
      name={COMMON_LIKE}
      component={LikeVisibleTab}
      options={{ tabBarIcon: IconTabLike }}
    />
    <BottomTabBar.Screen
      name={COMMON_MESSAGE}
      component={MessageVisibleTab}
      options={{ tabBarIcon: IconTabMessage }}
    />
    <BottomTabBar.Screen
      name={COMMON_PROFILE}
      component={ProfileVisibleTab}
      options={{ tabBarIcon: IconTabProfile }}
    />
  </BottomTabBar.Navigator>;
};

const MainNavigationProvider = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME_SCREEN} component={BottomTabBarNavigator} options={{ headerShown: false }} />
      {getListScreenHomeHideTab()}
      {getListScreenLikeHideTab()}
      {getListScreenMessageHideTab()}
      {getListScreenProfileHideTab()}
    </Stack.Navigator>
  );
};

export default MainNavigationProvider;
