import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';

import tailwind from 'tailwind-rn';
import { firestore, firebase } from '../../firebase/config';

export const SignUpStep2 = ({ navigation }) => {
  const route = useRoute();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text {...props} style={{ color: '#333', fontWeight: '600', textAlign: 'center', fontSize: 18 }}>
          Password
        </Text>
      ),
      headerStyle: {
        height: 50,
        backgroundColor: '#f9fafb', //Set Header color
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
    });
  }, [navigation]);

  const addPassword = async () => {
    if (password !== confirmPassword) {
      return alert('Please check again. Your password does not match each other!');
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(`${route.params.phone}@gmail.com`, password);

      const currentUser = firebase.auth().currentUser;

      await firestore
        .collection('users')
        .doc(currentUser.uid)
        .set({
          email: `${route.params.phone}@gmail.com`,
        });

      alert('Update your password');

      navigation.navigate('UserInfo', {id: currentUser.uid});
    } catch (err) {
      alert('Something went wrong...Please check again!');
    }
  };

  return (
    <View style={tailwind('justify-center flex-1 bg-white')}>
      <View style={tailwind('w-full')}>
        <TextInput secureTextEntry={true} style={tailwind('bg-gray-200  p-2 px-4 text-center')} onChangeText={setPassword} placeholder="Enter your password" />
      </View>

      <View style={tailwind('w-full')}>
        <TextInput secureTextEntry={true} style={tailwind('bg-gray-200  mt-6 p-2 px-4 text-center')} onChangeText={setConfirmPassword} placeholder="Confirm password" />
      </View>

      <View style={tailwind('px-10')}>
        <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-xl text-center mt-8')}>
          <Text style={tailwind('text-center text-white text-lg')} onPress={addPassword}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
