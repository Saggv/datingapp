import React from 'react';
import { useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {logout} from '../App/authSlice';

const ProfileScreen =({ navigation })=> {
  const dispatch = useDispatch();

  const Logout = () =>{
    dispatch(logout());
     navigation.navigate('Login');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="settings" size={25} color="#000" onPress={()=> Logout()} />
        </TouchableOpacity>
        <Image style={styles.avatar} source={{uri: 'https://picsum.photos/200'}} />
        <Text style={styles.primaryText}>Natan, 34</Text>
        <Text style={styles.paragrahpText}>Palo Alto, CA</Text>
      </View>

      <View style={styles.grid}>
        <View style={styles.gridItemLg}>
            <Image style={styles.image} source={{uri: 'https://picsum.photos/200'}} />
        </View>

        <View style={styles.gridIems}>
          <View style={styles.gridItem}>
          <Image style={styles.image} source={{uri: 'https://picsum.photos/200'}} />
          </View>

          <View style={styles.gridItem}>
          <Image style={styles.image} source={{uri: 'https://picsum.photos/200'}} />
          </View>
        </View>
      </View>

      <View style={styles.gridWrap}>
          <View style={styles.gridWrapItem}>
          <Image style={styles.image} source={{uri: 'https://picsum.photos/200'}} />
          </View>

          <View style={styles.gridWrapItem}>
          <Image style={styles.image} source={{uri: 'https://picsum.photos/200'}} />
          </View>

          <View style={styles.gridWrapItem}>
              <TouchableOpacity style={styles.addBtn}>
              <Ionicons name="add" size={25} color="#fff" />
              </TouchableOpacity>
          </View>
      </View>

      <View style={styles.about}>
          <Text style={styles.textStrong}>About</Text>
          <Text style={styles.paragrahpText}>My name is Natan, I’m travaller blogger. I really like my job.</Text>
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
   marginTop: 16
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
  backgroundColor: '#FDAAA3',
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
}

});

export { ProfileScreen };
