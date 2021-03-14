// import node_modules
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput } from 'react-native';

// import others
import tailwind from 'tailwind-rn';

// main
export const OTPSignUpScreen = ({ navigation }) => {
  const inputRef = useRef([]);
  const [ optCode, setOptCode ] = useState({});

  const inputArray = [ 1, 2, 3, 4, 5, 6 ];

  const InputTextChange = (name, value) => {
    if (name < 6) {
      inputRef.current[ name + 1 ].focus();
    }
    // let currentOpt = optCode + value.nativeEvent.text;
    let currentOpt = {};
    currentOpt[ name ] = value.nativeEvent.text;

    setOptCode({ ...optCode, ...currentOpt });
    console.log(currentOpt, optCode);
  };

  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <View style={tailwind('flex-1 justify-between')}>
        <View style={style.bg}>
          <Image source={require('./images/phone.png')} style={style.image} />
          <Text style={tailwind('text-center text-lg mt-8 mb-8')}>Enter OTP code</Text>

          <View style={tailwind('flex-row bg-gray-200 px-4 py-1 rounded-xl mb-14')}>
            {inputArray.map((input) => (<TextInput
              key={input}
              placeholder="--"
              keyboardType="numeric"
              onChange={(e) => InputTextChange(input, e)}
              autoFocus={input === 1}
              ref={(el) => (inputRef.current[ input ] = el)}
              style={style.OPTInput}
              maxLength={1}
              // onSubmitEditing={() => inputRef1.current.focus()}
            />
            ))}
          </View>

          <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-2xl text-center w-8/12')} onPress={() => navigation.navigate('Login')}>
            <Text style={tailwind('text-center text-white text-lg')} >Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tailwind('py-2  rounded-2xl border border-red-300 text-center w-8/12 mt-4')} onPress={() => navigation.navigate('OPTSignUp')}>
            <Text style={tailwind('text-center text-red-300 text-lg')}>Resend OTP</Text>
          </TouchableOpacity>
        </View>

        <View style={tailwind(' px-8 pb-8 mt-14')}>
          <Text style={tailwind('text-center text-base text-gray-500')}>Read our Privacy Policy. Tap “Agree & Continue” to accept the Terms of Service.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  bg: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
  OPTInput: {
    width: 30,
    height: 40,
    fontSize: 20,
    padding: 0,
    margin: 0,
    textAlign: 'center',
  },
});
