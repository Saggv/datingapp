import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import tailwind from 'tailwind-rn';

const EditProfileScreen = ({ navigation }) => {
  const [avatar, setAvatar] = useState(null);
  const [primaryImage, setPrimaryImage] = useState(null);
  const [secondaryImage, setSecondaryImage] = useState(null);
  const [tertiaryImage, setTertiaryImage] = useState(null);
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async (setAvatar) => {
    const isEvenNumber = (Math.floor(Math.random() * 100) + 1) % 2;

    let result;

    if (isEvenNumber !== 0) {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true,
      });
    } else {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true,
      });
    }

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  const onSubmit = () =>{
    const data = {
      avatar,
      primaryImage, 
      secondaryImage,
      tertiaryImage,
      desc
    };
    console.log(data);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => pickImage(setAvatar)}>
          <View style={[tailwind('w-24 h-24 bg-red-200 text-center flex justify-center items-center rounded-full overflow-hidden')]}>
            {avatar ? <Image style={styles.avatar} source={{ uri: avatar }} /> : <Ionicons name="camera-reverse-outline" size={25} color="#fff" />}
          </View>
        </TouchableOpacity>

        <Text style={styles.primaryText}>Natan, 34</Text>
        <Text style={styles.paragrahpText}>Palo Alto, CA</Text>
      </View>

      <View style={[styles.grid, tailwind('relative mb-44')]}>
        <TouchableOpacity style={[styles.gridItemLg, tailwind('bg-red-100 flex justify-center items-center absolute top-0'), {transform: [{ rotateY: '-5deg' }, { rotateZ: '-5deg' }], }]} onPress={() => pickImage(setPrimaryImage)}>
          {primaryImage ? <Image style={styles.image} source={{ uri: primaryImage }} /> : <Ionicons name="add" size={30} color="#fff" />}
        </TouchableOpacity>

        <View style={[styles.gridIems, { position: 'relative', width: '100%' }]}>
          <TouchableOpacity style={[tailwind('w-48 h-48 bg-red-100 flex justify-center items-center ml-2 top-4 rounded-lg'), { transform: [{ rotateY: '5deg' }, { rotateZ: '5deg' }], right: 0, top: 120, position: 'absolute' }]} onPress={() => pickImage(setSecondaryImage)}>
            {secondaryImage ? <Image style={[styles.image, {transform: [{ rotateY: '-10deg' }, { rotateZ: '-10deg' }]}]} source={{ uri: secondaryImage }} /> : <Ionicons name="add" size={30} color="#fff" />}
          </TouchableOpacity>


          <TouchableOpacity style={[tailwind('w-44 h-44 bg-red-100 flex justify-center items-center ml-2 top-4 rounded-lg'), { transform: [{ rotateY: '-5deg' }, { rotateZ: '-5deg' }], left: 0, top: 210, position: 'absolute' }]} onPress={() => pickImage(setTertiaryImage)}>
            {tertiaryImage ? <Image  style={[styles.image, {transform: [{ rotateY: '-10deg' }, { rotateZ: '-5deg' }]}]} source={{ uri: tertiaryImage }} /> : <Ionicons name="add" size={30} color="#fff" />}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.about}>
        <Text style={styles.textStrong}>About</Text>
        <TextInput multiline style={tailwind('rounded p-2  px-4 border border-t-0 border-l-0 border-r-0 border-gray-400')} onChangeText={setDesc} placeholder="Want to say something? " />
      </View>

      <View style={tailwind('px-10')}>
          <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-xl text-center mt-4 mb-4')} onPress={onSubmit}>
            <Text style={tailwind('text-center text-white text-lg')}>Next</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    resizeMode: 'cover',
  },
  primaryText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  paragrahpText: {
    color: '#555',
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    position: 'absolute',
    right: 0,
  },

  grid: {
    flex: 1,
    flexDirection: 'row',
    height: 220,
    padding: 5,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  gridItemLg: {
    width: '78%',
    height: 220,
    borderRadius: 10,
    overflow: 'hidden',
  },

  gridIems: {
    width: '33%',
  },

  gridItem: {
    width: '100%',
    height: '50%',
    padding: 5,
  },

  gridWrap: {
    flexWrap: 'wrap',
    height: 100,
    padding: 5,
    paddingTop: 0,
  },

  gridWrapItem: {
    display: 'flex',
    width: '30%',
    height: '100%',
    margin: 5,
    marginTop: 0,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#FDAAA3',
  },

  about: {
    paddingTop: 16,
    padding: 10,
    paddingBottom: 40,
  },

  textStrong: {
    fontWeight: '600',
    fontSize: 18,
  },

  addBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
  },
});

export { EditProfileScreen };
