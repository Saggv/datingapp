import React, { useRef } from 'react';

import PhoneInput from 'react-native-phone-input';

import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, SafeAreaView, TextInput } from 'react-native';

import tailwind from 'tailwind-rn';

export const LoginScreen = ({ navigation }) => {
  const phone = useRef(null);

  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <View style={tailwind('flex-1 justify-between')}>
        <View style={style.bg}>
          <Image source={require('./images/login-image.png')} style={style.image} />
        </View>

        <Text style={tailwind('text-center text-lg')}>Your everyday personal assistaddnt.</Text>

        <View style={tailwind('flex-1 px-10 pt-3  justify-center')}>
        <View style={tailwind('bg-gray-200 rounded-lg p-2 w-full')}>
            <PhoneInput ref={phone} initialCountry="us" autoFormat offset={16} flagStyle={{ width: 30, height: 30 }} textProps={{ placeholder: 'Telephone number' }} />
          </View>

          <View style={tailwind('w-full')}>
            <TextInput secureTextEntry={true}  style={tailwind('bg-gray-200 rounded-xl mt-4 p-2 px-10')} placeholder="Enter your password" />
          </View>

          <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-2xl text-center mt-10')}>
            <Text style={tailwind('text-center text-white text-lg')}>Login</Text>
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
    // height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
