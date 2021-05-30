import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { firestore } from '../firebase/config';
import * as firebase from 'firebase';

export default function LikeThumbnail({ data, navigation }) {
  const { id } = useSelector((state) => state.auth);

  const handleLike = async () => {
    try {
      await firestore
        .collection('users')
        .doc(data._id)
        .update({
          likes: firebase.firestore.FieldValue.arrayUnion(id),
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handlePass = async () => {
    try {
      await firestore
        .collection('users')
        .doc(id)
        .update({
          likes: firebase.firestore.FieldValue.arrayRemove(data._id),
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation?.navigate('HomeDetail', { id: data._id })}>
        <Image style={styles.photo} source={{ uri: data.avatarUrl }} />

        <View style={styles.info}>
          <Text style={styles.secondaryText}>{data.name}</Text>

          <View style={styles.action}>
            <TouchableOpacity style={styles.button} onPress={() => handlePass()}>
              <Ionicons name="close-outline" size={25} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleLike()}>
              <Ionicons name="heart" size={25} color="#fdaaa3" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },

  secondaryText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
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
