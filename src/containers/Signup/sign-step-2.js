import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import tailwind from 'tailwind-rn';

export const SignUpStep2 = ({ navigation }) => {
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

  return (
    <View style={tailwind('justify-center flex-1 bg-white')}>
      <View style={tailwind('w-full')}>
        <TextInput secureTextEntry={true} style={tailwind('bg-gray-200  p-2 px-4')} placeholder="Enter your password" />
      </View>

      <View style={tailwind('w-full')}>
        <TextInput secureTextEntry={true} style={tailwind('bg-gray-200  mt-6 p-2 px-4')} placeholder="Confirm password" />
      </View>

      <View style={tailwind('px-10')}>
      <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-xl text-center mt-8')}>
        <Text style={tailwind('text-center text-white text-lg')} onPress={() => navigation.navigate('Login')}>
          Next
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
