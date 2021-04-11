// import node_modules
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import { firebase } from '../../firebase/config';

import { login } from '../App/authSlice';

// import others
import tailwind from 'tailwind-rn';

// main
export const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const phone = useRef(null);

  const Login = async () => {
    try{
      const res = await firebase.auth().signInWithEmailAndPassword(`${phoneNumber}@gmail.com`,password);
      dispatch(login());
      return navigation.navigate('Home');
    }catch(err){
      alert('Some thing went wrong!');
    }
  };

  return (
    <SafeAreaView style={tailwind('flex-1 bg-white')}>
      <View style={tailwind('flex-1 justify-between')}>
        <View style={style.bg}>
          <Image source={require('./images/login-image.png')} style={style.image} />
        </View>

        <View>
          <Text style={tailwind('text-center text-lg')}>Your everyday personal assistaddnt.</Text>
        </View>

        <View style={tailwind('flex-1 px-6 pt-3  justify-center')}>
          <View style={tailwind('w-full bg-red-500')}>
            <PhoneInput
              ref={phone}
              defaultCode="VN"
              placeholder="-- -- -- --   -- -- --   -- -- --"
              defaultValue={phoneNumber}
              onChangeFormattedText={setPhoneNumber}
              withDarkTheme
              withShadow={false}
              autoFocus
              containerStyle={{ backgroundColor: '#f9fafb', width: '100%' }}
              textContainerStyle={{ paddingVertical: 8, borderRadius: 8, width: '100%' }}
            />
          </View>

          <View style={tailwind('w-full')}>
            <TextInput secureTextEntry={true} style={tailwind('bg-gray-50 rounded mt-4 p-2 px-10')} onChangeText={setPassword} placeholder="Enter your password" />
          </View>

          <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-2xl text-center mt-10')}>
            <Text style={tailwind('text-center text-white text-lg')} onPress={Login}>
              Login
            </Text>
          </TouchableOpacity>
          <Text style={tailwind('text-center mt-3')}>Forgot password?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  bg: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
