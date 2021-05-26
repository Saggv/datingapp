import React, {useEffect, useState, useLayoutEffect} from 'react';
import { useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import {useSelector } from 'react-redux'
import { firestore} from '../../firebase/config';
import moment from 'moment';
import { SETTING_SCREEN } from '../../constants/StackNavigation';

import {logout} from '../App/authSlice';
import tailwind from 'tailwind-rn';

const ProfileScreen =({ navigation })=> {
  const dispatch = useDispatch();
  const {id}= useSelector(state => state.auth);
  const [profile, setProfile] = useState(null);
  const [age, setAge] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);


  useEffect(()=>{
   firestore.collection('users').doc(id).get()
    .then(res => {
      setProfile(res.data());
      const currentDate = moment().format('DD/MM/YYYY').split("/").map(date => + date);
      const userBirthday = profile?.age.split("/").map(date => + date) || ['2000', '10', '6'];
      console.log(profile.age);
      setAge(moment(currentDate.reverse()).diff(moment(userBirthday?.reverse()), 'years'));
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  },[]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="settings" size={25} color="#333" onPress={()=> navigation.navigate(SETTING_SCREEN)} />
        </TouchableOpacity>
          <View style={[styles.avatar, styles.boxShadow]}>
             <Image style={[styles.image]} source={{uri: profile?.avatarUrl}} />
          </View>
        <Text style={styles.primaryText}>{profile?.name}, {age}</Text>
        <Text style={styles.paragrahpText}>{profile?.address}</Text>
        <TouchableOpacity style={tailwind('mt-2')}>
           <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        <View style={[styles.gridItemLg]}>
            <Image style={styles.image} source={{uri: profile?.primaryUrl}} />
        </View>

        <View style={styles.gridIems}>
          <View style={styles.gridItem}>
          <Image style={styles.image} source={{uri: profile?.secondaryUrl}} />
          </View>

          <View style={styles.gridItem}>
          <Image style={styles.image} source={{uri:profile?.tertiaryUrl}} />
          </View>
        </View>
      </View>

      <View style={styles.gridWrap}>
      <View style={styles.gridWrapItem}>
              <TouchableOpacity style={styles.addBtn}>
              <Ionicons name="add" size={25} color="#fff" />
              </TouchableOpacity>
          </View>

          <View style={styles.gridWrapItem}>
              <TouchableOpacity style={styles.addBtn}>
              <Ionicons name="add" size={25} color="#fff" />
              </TouchableOpacity>
          </View>

          <View style={styles.gridWrapItem}>
              <TouchableOpacity style={styles.addBtn}>
              <Ionicons name="add" size={25} color="#fff" />
              </TouchableOpacity>
          </View>
      </View>

      <View style={styles.about}>
          <Text style={styles.textStrong}>About</Text>
          <Text style={styles.paragrahpText}>{profile?.desc}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 container:{
   padding: 1,
   backgroundColor: '#fff',
   flex:1
 },
 header:{
   flex:1,
   alignItems: 'center',
   padding: 10
 },
 avatar:{
   width: 120,
   height: 120,
   resizeMode: 'cover',
   borderRadius: 60,
   marginBottom: 10,
   marginTop: 16,
   borderWidth: 3,
   borderColor: '#fff',
   overflow: 'hidden'
 },
 primaryText:{
   fontSize:24,
   fontWeight: '600',
   color: '#333'
 },
 paragrahpText:{
   color: '#555'
 },

 button: {
  width: 50,
  height: 50,
  borderRadius: 50,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: "#000",
  position: 'absolute',
  right: 0,
},

grid:{
  flex: 1,
  flexDirection: 'row',
  height: 200,
  padding:5
},

image: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  borderRadius: 10
},

gridItemLg: {
  width: '66%',
  borderRadius: 10,
  overflow: 'hidden',
  padding: 5,
},

gridIems:{
  width: '33%'
},

gridItem: {
  width: '100%',
  height: '50%',
  padding: 5
},

gridWrap:{
  flexWrap: 'wrap',
  height: 100,
  padding: 5,
  paddingTop: 0
},

gridWrapItem:{
  display: 'flex',
  width: '30%' ,
  height: '100%',
  margin: 5,
marginTop:0,
  borderRadius: 10,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
  backgroundColor: '#fee2e2',
},

about:{
  paddingTop: 16,
  padding: 10,
  paddingBottom: 40
},

textStrong: {
  fontWeight: '600',
  fontSize: 18
},

addBtn: {
  width: 50,
  height: 50,
  borderRadius: 50,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: "#000",
},

boxShadow:{
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  
  elevation: 24,
}

});

export { ProfileScreen };
