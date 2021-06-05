import React, {useLayoutEffect, useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import * as firebase from 'firebase';
import { firestore } from '../../firebase/config';
import {  useSelector } from 'react-redux';

import LikeThumbnail from '../../components/LikeThumbnail';
import { NotFoundScreen } from '../../components';

const LikeScreen = ({ navigation }) => {
  const { id, profile } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    // // navigation.setOptions({
    // //   header: null,
    // // });
    // navigation.hideHeader = true;
    navigation.setOptions({headerShown: false});
  }, [navigation]);


 const getData = async() =>{
 const res = await  firestore.collection('users').doc(id).get();

 if(!res.data()?.likes){
   return;
 };

 if(res.data()?.likes.length < 1){
   return;
 }

 firestore
 .collection('users')
 .where(firebase.firestore.FieldPath.documentId(), 'in', res.data().likes)
 .onSnapshot((querySnapshot) => {
   const users = querySnapshot.docs.map((documentSnapshot) => {
     return {
       _id: documentSnapshot.id,
       ...documentSnapshot.data(),
     };
   });

  setData(users);
 });
 };

  useEffect(() =>{
    getData();
  },[]);

  // const data = [
  //   {
  //     img: 'https://i.pinimg.com/564x/a8/8e/53/a88e53d61f9a1a897f26b8ff07798782.jpg',
  //     name: 'Jobh Calhm'
  //   },
  //   {
  //     img: 'https://i.pinimg.com/564x/df/b8/dc/dfb8dcfd22bcff55e21f18bc9be49cce.jpg',
  //     name: 'Jobh Calhm'
  //   },
  //   {
  //     img: 'https://i.pinimg.com/564x/5d/41/3a/5d413a20291d92dc59d7b0ade3cef8c6.jpg',
  //     name: 'Jobh Calhm'
  //   },
  //   {
  //     img: 'https://i.pinimg.com/564x/91/f9/0d/91f90dc6be664e07fda91343e1bfb416.jpg',
  //     name: 'Jobh Calhm'
  //   },
  //   {
  //     img: 'https://i.pinimg.com/564x/5e/63/f7/5e63f7256b6696ed70efbc6302383fd1.jpg',
  //     name: 'Jobh Calhm'
  //   },
  //   {
  //     img: 'https://i.pinimg.com/564x/ce/f8/e3/cef8e379f327b9f63d21e8f0515e0486.jpg',
  //     name: 'Jobh Calhm'
  //   },
  //   {
  //     img: 'https://i.pinimg.com/564x/1f/37/98/1f37982d186cc95b42735da28bc4fbea.jpg',
  //     name: 'Jobh Calhm'
  //   }
  // ]

  return (
    <View style={{flex:1}}>
      {
        data.length > 0 ? (
          <FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={styles.container}
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.primaryText}>Your preferences</Text>
              <Text style={styles.paragraph}>Here you can see the people you like. Here you can reciprocate.</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.wrapper}>
              <LikeThumbnail data={item} navigation={navigation} />
            </View>
          )}
          keyExtractor={item => item.img}
        />
        ): (
          <View style={{flex:1, backgroundColor: '#fff'}}>
                        <View style={[styles.header, {backgroundColor: '#f9f9f9'}]}>
              <Text style={styles.primaryText}>Your preferences</Text>
              <Text style={styles.paragraph}>Here you can see the people you like. Here you can reciprocate.</Text>
            </View>
            <NotFoundScreen headerText="We're so sorry!" subText="You don't have any active yet!!"></NotFoundScreen>
          </View>
        )
      }
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingBottom: 8
  },

  header:{
    paddingBottom: 16,
    paddingTop: 8
  },

  primaryText: {
    fontSize: 26,
    textAlign: 'center',
    color: '#333',
    marginVertical: 10,
  },

  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    paddingHorizontal: 20,
  },

  wrapper: {
    flex: 1,
    padding: 5,
  },
});

export { LikeScreen };
