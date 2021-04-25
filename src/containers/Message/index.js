import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import {useSelector } from 'react-redux'
import {firestore} from '../../firebase/config';

import { ChatItem, Search } from '../../components';

const MessageScreen = ({ navigation }) => {
  const [threads, setThreads] = useState([]);
  const {id}= useSelector(state => state.auth);

  useEffect( async()=>{
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

  //   const unsubscribe = firestore.collection('THREADS')
  //   .onSnapshot(querySnapshot => {
  //     const threads = querySnapshot.docs.map(documentSnapshot => {
  //       return {
  //         _id: documentSnapshot.id,
  //         // give defaults
  //         name: '',
  //         ...documentSnapshot.data()
  //       };
  //     });

  //     setThreads(threads);
  //   });

  // /**
  //  * unsubscribe listener
  //  */
  // return () => unsubscribe();

  return () => resThreads();
  },[]);

  console.log(threads);

  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        contentContainerStyle={styles.wrapper}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={{paddingHorizontal: 8}}>
            <Search />
            </View>

            <ScrollView style={[styles.scrollView, {backgroundColor: '#fff'}]} horizontal={true} showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 9, 5, 6].map((user) => (
                <View style={[styles.user, styles.boxShadow]} key={user}>
                  <Image style={styles.userPhoto} source={{ uri: 'https://picsum.photos/200' }} />
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
