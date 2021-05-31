// import node_modules
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import { MessageScreen } from '../../containers/Message';

// import others
import { CHAT_DETAIL, MESSAGE_SCREEN } from '../../constants/StackNavigation';
import { FontAwesome } from '@expo/vector-icons'; 
import { ChatDetail } from '../../containers/Message/ChatDetail';

// main
const Stack = createStackNavigator();

export const IconTabMessage = ({ focused }) =>(
  <FontAwesome name={focused ? "comment" : "comment-o"} size={28} color={focused ? '#FDAAA3' : '#333'} />
);

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
