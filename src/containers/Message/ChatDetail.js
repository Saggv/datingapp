import React, { useCallback, useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { GiftedChat, Actions, Send } from 'react-native-gifted-chat';
import { Feather } from '@expo/vector-icons'; 
import {useRoute} from '@react-navigation/native';
import {useSelector } from 'react-redux'

import {firestore} from '../../firebase/config';

export const ChatDetail = ({navigation}) => {
  const route = useRoute();
  const {id, profile}= useSelector(state => state.auth);
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text {...props} style={{ color: '#333', fontWeight: '600', textAlign: 'center', fontSize: 18, marginStart: -50 }}>
          {route.params.user.name}
        </Text>
      ),
      headerStyle: {
        height: 50,
        backgroundColor: '#fff', //Set Header color
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: '#333', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
    });
  }, [navigation]);

  useEffect(()=>{
    const messagesListener = firestore.collection('THREADS')
    .doc(route.params.roomId)
    .collection('MESSAGES')
    .orderBy('createdAt', 'desc')
    .onSnapshot(querySnapshot => {
      const messages = querySnapshot.docs.map(doc => {
        const firebaseData = doc.data();

        const data = {
          _id: doc.id,
          text: '',
          createdAt: new Date().getTime(),
          ...firebaseData
        };

        if (!firebaseData.system) {
          data.user = {
            ...firebaseData.user,
            name: firebaseData.user.email
          };
        }

        return data;
      });

      setMessages(messages);
    });

  return () => messagesListener();
  },[])

  const onSendM = useCallback((messages = []) => {
    firestore.collection('THREADS')
    .doc(route.params.roomId)
    .collection('MESSAGES')
    .add({
      text: messages[0].text,
      createdAt: new Date().getTime(),
      user: {
        _id: id,
        avatar: profile.avatarUrl
      }
    });

     firestore.collection('THREADS')
    .doc(route.params.roomId)
    .set(
      {
        latestMessage: {
          text:messages[0].text,
          createdAt: new Date().getTime()
        }
      },
      { merge: true }
    );
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  function renderActions(props) {
    return (
      <Actions
        {...props}
        options={{
          // ['Send Image']: console.log('dddd'),
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
 };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        renderActions={renderActions}
        renderSend={renderSend}
        onSend={messages => onSendM(messages)}
        user={{
          _id: id,
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
