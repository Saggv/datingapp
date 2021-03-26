// import node_modules
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import { MessageScreen } from '../../containers/Message';

// import others
import { CHAT_ICON, CHAT_ACTIVE_ICON } from '../../../assets/images/BottomTabNavigator';
import { CHAT_DETAIL, MESSAGE_SCREEN } from '../../constants/StackNavigation';
import { ChatDetail } from '../../containers/Message/ChatDetail';

// main
const Stack = createStackNavigator();

export const IconTabMessage = ({ focused }) => <Image source={focused ? CHAT_ACTIVE_ICON : CHAT_ICON} style={focused ? styles.messageActiveIcon : styles.messageIcon} />;

// Screen of tab home show tabs
export const MessageVisibleTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MESSAGE_SCREEN} component={MessageScreen} />
    </Stack.Navigator>
  );
};

// Screen of tab home hide tabs
export const getListScreenMessageHideTab = () => {
  return <>
        <Stack.Screen name={CHAT_DETAIL} component={ChatDetail} />
  </>;
};

const styles = StyleSheet.create({
  messageIcon: { width: 31, height: 26 },
  messageActiveIcon: { width: 26, height: 26 },
});
