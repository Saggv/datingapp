import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const {width} = Dimensions.get('window');

export default function LikeThumbnail({data}) {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri:data.img}} />

      <View style={styles.info}>
        <Text style={styles.secondaryText}>{data.name}</Text>

        <View style={styles.action}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="close-outline" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Ionicons name="heart" size={25} color="#fdaaa3" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },

  secondaryText: {
    fontSize: 18,
    textAlign :'center',
    color: '#fff'
  },

  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  info: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
  },

  action: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },

  button: {
    width: 35,
    height: 35,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 20,
  },
});
