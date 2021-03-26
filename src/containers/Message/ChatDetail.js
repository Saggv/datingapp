import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { GiftedChat, Actions, Send } from 'react-native-gifted-chat';
import { Feather } from '@expo/vector-icons'; 

export const ChatDetail = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://picsum.photos/200',
        },
      },
    ]);
  }, []);

  const onSendM = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  function renderActions(props) {
    return (
      <Actions
        {...props}
        options={{
          ['Send Image']: console.log('dddd'),
        }}
        icon={() => <Feather name="more-vertical" size={24} color="black" />}
      />
    );
  };

 const renderSend= (props) =>{
   return(
    <Send
    {...props}
    containerStyle={{
     height:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5
    }}
  >
  <Ionicons name={'send'} size={28} color='#FF8F86' />
  </Send>
   )
 }


  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        renderActions={renderActions}
        renderSend={renderSend}
        onSend={messages => onSendM(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'cover',
  },

  userInfo: {
    flex: 1,
    marginLeft: 10,
  },

  primaryText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '700',
  },

  content: {
    paddingVertical: 16,
  },

  friendChatBox: {
    marginRight: 50,
    marginBottom: 16,
  },

  chatText: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F99999',
    color: '#555',
  },

  textTime: {
    textAlign: 'right',
    fontSize: 12,
    color: '#999',
  },

  myChatBox: {
    marginLeft: 50,
    marginBottom: 16,
  },

  myChatText: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#DDD',
    color: '#555',
  },
});
