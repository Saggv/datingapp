import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import moment from 'moment';
import { useRoute } from '@react-navigation/native';
import { storage, firestore} from '../../firebase/config';

import tailwind from 'tailwind-rn';

const EditProfileScreen = ({ navigation }) => {
  const route = useRoute();
  const [avatar, setAvatar] = useState(null);
  const [primaryImage, setPrimaryImage] = useState(null);
  const [secondaryImage, setSecondaryImage] = useState(null);
  const [tertiaryImage, setTertiaryImage] = useState(null);
  const [desc, setDesc] = useState(null);
  const [age, setAge] = useState(null);

  useEffect(() => {
    const currentDate = moment().format('DD/MM/YYYY').split("/").map(date => + date);

    const userBirthday = route.params.data.age.split("/").map(date => + date);

    setAge(moment(currentDate.reverse()).diff(moment(userBirthday.reverse()), 'years'));

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
      });
    } else {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  const uploadImage = async(uri, name) =>{
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = storage.ref().child(name);
    return await ref.put(blob);
  }

  const onSubmit = async() =>{
    const avatarUrl = await getUploadURL(avatar, 'avatar');
    const primaryUrl = await getUploadURL(primaryImage, 'primary_image');
    const secondaryUrl = await getUploadURL(secondaryImage, 'secondary_image');
    const tertiaryUrl = await getUploadURL(tertiaryImage, 'tertiary_image');

    const {name, gender, age, address, job, id} = route.params.data;

    await firestore
    .collection('users')
    .doc(id)
    .set({
      name,
      gender,
      age,
      address,
      job,
      desc,
      avatarUrl,
      primaryUrl,
      secondaryUrl,
      tertiaryUrl
    });

    alert('Update your profile success!');

    navigation.navigate('Login');
  };

  const getUploadURL = async (image, folderName) =>{
    const res = await uploadImage(image, `${folderName}/${Math.random()}`);
    const result = await res.ref.getDownloadURL();
    return result;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => pickImage(setAvatar)}>
          <View style={[tailwind('w-24 h-24 bg-gray-200 text-center flex justify-center items-center rounded-full overflow-hidden')]}>
            {avatar ? <Image style={styles.avatar} source={{ uri: avatar }} /> : <Ionicons name="camera-reverse-outline" size={25} color="#fff" />}
          </View>
        </TouchableOpacity>

        <Text style={styles.primaryText}>{route.params.data.name}, {age}</Text>
        <Text style={styles.paragrahpText}>{route.params.data.address}</Text>
      </View>

      <View style={[styles.grid, tailwind('relative mb-44')]}>
        <TouchableOpacity style={[styles.gridItemLg, tailwind('bg-red-100 flex justify-center items-center absolute top-0'), {transform: [{ rotateY: '-5deg' }, { rotateZ: '-5deg' }]}]} onPress={() => pickImage(setPrimaryImage)}>
          {primaryImage ? <Image style={styles.image} source={{ uri: primaryImage }} /> : <Ionicons name="add" size={30} color="#fff" />}
        </TouchableOpacity>

        <View style={[styles.gridIems, { position: 'relative', width: '100%' }]}>
          <TouchableOpacity style={[tailwind('w-48 h-48 bg-gray-100 flex justify-center items-center ml-2 top-4 rounded-lg'), { transform: [{ rotateY: '5deg' }, { rotateZ: '5deg' }], right: 0, top: 120, position: 'absolute' }]} onPress={() => pickImage(setSecondaryImage)}>
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
    backgroundColor: '#D1D5DB',
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
