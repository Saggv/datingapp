import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {useSelector } from 'react-redux';
import moment from 'moment';

export const ChatItem = ({ navigation, item })  => {
  const {id}= useSelector(state => state.auth);

  const checkUser=(item)=>{
    if(item.targetId === id){
        return {name: item.fromName, avatarUrl: item.fromAvatar};
    }else{
      return {name: item.targetName, avatarUrl: item.targetAvatar};
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ChatDetail', {roomId: item?.id, user: checkUser(item)})}>
      <TouchableOpacity style={[styles.chatItemPhoto, styles.boxShadow]}>
        <Image style={styles.photo} source={{ uri: checkUser(item).avatarUrl }} />
      </TouchableOpacity>

      <View style={styles.chatContent}>
        <View style={styles.chatText}>
          <Text style={styles.textHeader}>{checkUser(item).name}</Text>
          <Text style={styles.paragraph}>{item?.latestMessage?.text}</Text>
        </View>

        <View style={styles.chatDetail}>
          <Text style={styles.smallText}>{moment(item?.latestMessage?.createdAt).valueOf()}</Text>
          <Text style={styles.unread}>2</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 8
  },

  chatItemPhoto: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },

  photo:{
    width: '100%',
    height: '100%',
    resizeMode:  'cover',
    borderRadius: 50
  },

  chatContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f7f7f7',
    paddingVertical: 10,
  },

  textHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333'
  },

  paragraph: {
    color: '#333',
  },

  chatDetail: {
    textAlign: 'right',
    alignItems: 'flex-end',
  },

  smallText: {
    color: '#777',
  },

  unread: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDAAA3',
    borderRadius: 50,
    color: '#fff',
    width: 20,
    height: 20,
    textAlign: 'center',
    marginTop: 5,
  },

  boxShadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 6,
  },
});
