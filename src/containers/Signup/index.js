// import node_modules
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';

// import others
import tailwind from 'tailwind-rn';

// main
export const SignUpScreen = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <View style={tailwind('flex-1 justify-between')} >
        <View style={style.bg}>
          <Image
            source={require('./images/phone.png')}
            style={style.image}
          />
          <Text style={tailwind('text-center text-lg mt-8 mb-8')}>Welcome to  Dating App</Text>

          <View style={tailwind('flex-row bg-gray-200 px-4 py-1 rounded-xl mb-14')}>
            <Image
              source={require('./images/flag.png')}
              style={tailwind('mr-4')}
            />
            <TextInput
              textContentType="telephoneNumber"
              placeholder="+84 - - -   - - -   - - - -"
              keyboardType="numeric"
              style={tailwind('text-lg tracking-wider w-7/12')}
              maxLength={10}
            />
          </View>

          <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-2xl text-center w-7/12')} onPress={() => navigation.navigate('OPTSignUp')}>
            <Text style={tailwind('text-center text-white text-lg')}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={tailwind(' px-8 pb-8 mt-14')}>
          <Text style={tailwind('text-center text-base text-gray-500')}>Read our Privacy Policy. Tap “Agree & Continue” to accept the Terms of Service.</Text>
        </View>
      </View>
    </SafeAreaView >
  );
};

const style = StyleSheet.create({
  bg: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:  30,
  },
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
});
