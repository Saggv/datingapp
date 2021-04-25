import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import {useSelector } from 'react-redux'
import {firestore} from '../../firebase/config';

import { ChatItem, Search } from '../../components';

import tailwind from 'tailwind-rn';

const MessageScreen = ({ navigation }) => {
  const [threads, setThreads] = useState([]);
  const {id}= useSelector(state => state.auth);

  useEffect( ()=>{
      (async()=>{
        const listRooms = [];
        const result =[];
        const resThreads = await firestore.collection('THREADS').get();
    
        await resThreads.forEach((docs) =>{
          listRooms.push({...docs.data(), id: docs.id});
        });
    
        listRooms.forEach(room =>{
          if(room.targetId === id || room.fromId === id){
            return result.push(room);
          }
        });
    
        setThreads(result);
      return () => resThreads();
      })();
  },[]);

  const userData = [
      'https://i.pinimg.com/originals/f6/a8/e9/f6a8e92bd71a9d8ea41a6adca0fab8f5.jpg',
      'https://i.pinimg.com/564x/b1/ff/98/b1ff98ccc4d4c6a7bb1d645edb28f2d8.jpg',
      'https://i.pinimg.com/564x/26/7b/f3/267bf38a72c2c3bb0efb29790b267df9.jpg',
      'https://i.pinimg.com/564x/b0/27/b2/b027b21c10d2a12f4b570d11257b66ef.jpg',
      'https://i.pinimg.com/564x/3f/de/4a/3fde4acb0a9cb680d16d62ca51e5ec36.jpg',
      'https://i.pinimg.com/564x/c9/d1/be/c9d1be341601c6ccef5fc04411077a15.jpg',
  ]

  return (
    <View style={styles.container}>
            {
        threads.length < 1 ? (
          <View style={styles.header}>
          <View style={{paddingHorizontal: 8}}>
          <Search />
          </View>

          <Text style={tailwind('text-center mt-4 mb-2')}>You haven't had any chat yet!</Text>

          <ScrollView style={[styles.scrollView, {backgroundColor: '#fff'}]} horizontal={true} showsHorizontalScrollIndicator={false}>
            {userData.map((img) => (
              <View style={[styles.user, styles.boxShadow]} key={img}>
                <Image style={styles.userPhoto} source={{ uri: img }} />
              </View>
            ))}
          </ScrollView>
        </View>
        ):(
          <FlatList
          data={threads}
          contentContainerStyle={styles.wrapper}
          ListHeaderComponent={
            <View style={styles.header}>
              <View style={{paddingHorizontal: 8}}>
              <Search />
              </View>
  
              <ScrollView style={[styles.scrollView, {backgroundColor: '#fff'}]} horizontal={true} showsHorizontalScrollIndicator={false}>
                {userData.map((img) => (
                  <View style={[styles.user, styles.boxShadow]} key={img}>
                    <Image style={styles.userPhoto} source={{ uri: img }} />
                  </View>
                ))}
              </ScrollView>
            </View>
          }
          renderItem={({ item }) => (
              <ChatItem navigation={navigation} item={item} />
          )}
          keyExtractor={(item) => item}
        />
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flex: 1,
    paddingVertical: 10,
  },

  primaryText: {
    textAlign: 'center',
    fontSize: 26,
    color: '#fff',
  },

  scrollView: {
    marginVertical: 10,
  },

  user: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 0,
    },
    shadowOpacity: 0.58,

    elevation: 5,
  },

  userPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 50,
  },

  wrapper: {
    backgroundColor: '#fff',
  },

  boxShadow:{
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    
    // elevation: 24,
  },
});

export { MessageScreen };
