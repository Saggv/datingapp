import React from 'react';
import {View,  StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Search = () =>{
  return(
    <View style={styles.container}>
    <TouchableOpacity style={styles.searchIcon}>
        <Ionicons name="search" size={20} color="#666" />
      </TouchableOpacity>
    <TextInput style={styles.searchInut} placeholder="Searcddh" />
  </View>
  )
};

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:  20,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 16
  },

  searchInut:{
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
})