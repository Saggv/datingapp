import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

import tailwind from 'tailwind-rn';

export const LogSignInScreen = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <View style={tailwind('flex-1 justify-between')} >
        <View style={style.bg}>
          <Image
            source={require('./images/login-image.png')}
            style={style.image}
          />
          <Text style={tailwind('text-center text-lg')}>Your everyday personal assistant.</Text>
        </View>

        <View style={tailwind('flex-1 px-10 pt-3  justify-center')}>
          <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-2xl text-center')} onPress={() => navigation.navigate('SignUp')}>
            <Text style={tailwind('text-center text-white text-lg')}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tailwind('py-2 bg-white rounded-2xl text-center mt-4')}>
            <Text style={tailwind('text-center text-red-300 text-lg')}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  );
};

const style = StyleSheet.create({
  bg: {
    width: '100%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:  30,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
