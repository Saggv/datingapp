import React, {useEffect, useState, Fragment, useLayoutEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {useSelector } from 'react-redux'

import {firestore} from '../../firebase/config';

export const HomeDetail = ({ navigation }) => {
  const {id}= useSelector(state => state.auth);
  const [user, setUser] = useState();
  const [age, setAge] = useState();
  const route = useRoute();
  const [currentUser, setCurrentUser] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  useEffect(()=>{
    firestore.collection('users').doc(route.params.id).get()
    .then(res => {
      setUser({...res.data(), id: res.id});
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

    firestore.collection('users').doc(id).get()
    .then(res => {
      setCurrentUser({...res.data(), id: res.id});
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  },[navigation]);

  useEffect(()=>{
    setAge(moment().diff(moment(user?.age, "DD-MM-YYYY"), 'years'))
  },[user]);

  const createChatRoom = async() =>{
    const listRooms = [];
    const resThreads = await firestore.collection('THREADS').get();

    if(resThreads.empty){
      firestore.collection('THREADS').add({
        targetId: user.id,
        fromId: id,
        targetAvatar: user.avatarUrl,
        targetName: user.name,
        fromAvatar: currentUser.avatarUrl,
        fromName: currentUser.name,
      }).then(res =>{
        return  navigation.navigate('ChatDetail', {roomId: res.id, user});
      });
    };

    await resThreads.forEach((docs) =>{
      listRooms.push({...docs.data(), id: docs.id});
    });
    console.log(user.id, id);
    listRooms.every((item)=>{
      if((item.targetId === user.id && item.fromId === id) || (item.targetId === id && item.fromId === user.id)){
            return  navigation.navigate('ChatDetail', {roomId: item.id, user:{...user, avatarUrl: item.targetAvatar}});
      }else{
        console.log('new');
        firestore.collection('THREADS').add({
          targetId: user.id,
          fromId: id,
          targetAvatar: user.avatarUrl,
          targetName: user.name,
          fromAvatar: currentUser.avatarUrl,
          fromName: currentUser.name
        }).then(res =>{
          return  navigation.navigate('ChatDetail', {roomId: res.id, user});
        });
      }
    })

    // firestore.collection('THREADS').where("targetId", "==", user.id).where("fromId", "==", id).where("targetId", "==", id).where("fromId", "==", user.id).get().then(res =>{
    //   let roomId;
    //     if(res.empty){
    //       firestore.collection('THREADS').add({
    //         targetId: user.id,
    //         fromId: id
    //       }).then(res =>{
    //         roomId = res.id;
    //         return  navigation.navigate('ChatDetail', {roomId, user});
    //       })
    //     }else{
    //       res.forEach((docs) =>{
    //         roomId = docs.id;
    //         return  navigation.navigate('ChatDetail', {roomId, user});
    //      });
    //     }
    // })
  }

  return (
    <Fragment>
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <SwiperFlatList
          showPagination
          data={[user?.avatarUrl, user?.primaryUrl, user?.secondaryUrl, user?.tertiaryUrl]}
          renderItem={({ item }) => (
            <View style={[styles.child]}>
              <Image source={{uri: item}} style={styles.photo}></Image>
            </View>
          )}
        />
      </View>

      <View style={styles.detail}>
            <View>
              <Text style={styles.primaryText}>{user?.name}, {age}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <Text style={styles.secondaryText}>About me</Text>
              <Text style={styles.paragraph}>{user?.desc}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <Text style={styles.secondaryText}>Location</Text>
              <Text style={styles.paragraph}>{user?.address}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <Text style={styles.secondaryText}>Interests</Text>
              <Text style={styles.paragraph}>I like to play basketball and tennis, I love pets and active sports. I run in the park every morning.</Text>
            </View>
      </View>
    </ScrollView>
          <TouchableOpacity style={styles.fabButton} onPress={() => createChatRoom()}>
          <MaterialCommunityIcons name="telegram" size={24} color="#FCA5A5" />
        </TouchableOpacity>
        </Fragment>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width,
    flex:1,
    backgroundColor: '#fff',
  },

  wrapper: {
    flex: 1,
    height: height - 130,
  },

  child: {
    flex: 1,
    width,
    justifyContent: 'center',
  },

  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  detail: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 15,
  },

  infoWrapper:{
    marginVertical: 10
  },

  primaryText:{
    fontSize: 23,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '600',
    color: '#333'
  },

  secondaryText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 5
  },

  paragraph:{
    color: '#555'
  },

  fabButton: {
    bottom: 30,
    right: 20,
    position: 'absolute',
    padding: 10,
    backgroundColor: '#fff',
    width: 48,
    height:48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
