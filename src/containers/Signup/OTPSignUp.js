// import node_modules
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';

// import others
import tailwind from 'tailwind-rn';
import { SIGNUPSTEP2 } from '../../constants/StackNavigation';
import { firebase } from '../../firebase/config';

firebase.auth().settings.appVerificationDisabledForTesting = true;
// main
export const OTPSignUpScreen = ({ navigation }) => {
  const route = useRoute();
  const [verificationCode, setVerificationCode] = useState({});
  const otpInput = useRef(null);

  const confirmOPTCode = async () => {
    try {
      const credential = await firebase.auth.PhoneAuthProvider.credential(route.params.verificationId, verificationCode);
      await firebase.auth().signInWithCredential(credential);
      alert('Phone authentication successful 👍');
      navigation.navigate(SIGNUPSTEP2, {phone: route.params.phone});
    } catch (err) {
      alert(err);
    }
  };

  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <View style={tailwind('flex-1 justify-between')}>
        <View style={style.bg}>
          <Image source={require('./images/phone.png')} style={style.image} />
          <Text style={tailwind('text-center text-lg mt-8 mb-8')}>Enter OTP code</Text>

          <OTPTextView ref={otpInput} handleTextChange={setVerificationCode} inputCount={6} keyboardType="numeric" containerStyle={{ padding: 20 }} textInputStyle={{ width: 30 }} />

          <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-2xl text-center w-8/12')} onPress={confirmOPTCode}>
            <Text style={tailwind('text-center text-white text-lg')}>Next</Text>
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
