// import node_modules
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput } from 'react-native';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import PhoneInput from 'react-native-phone-number-input';

// import others
import tailwind from 'tailwind-rn';
import { firebase, firebaseConfig } from '../../firebase/config';
import {OPTSIGNUP} from '../../constants/StackNavigation';

// main
export const SignUpScreen = ({ navigation }) => {
  const recaptchaVerifier = useRef(null);
  const phoneInput = useRef(null);
  const [phoneValue, setPhoneValue] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();

  const attemptInvisibleVerification = false;

  const sendVerificationCode = async () => {
    // try {
    //   const phoneProvider = new firebase.auth.PhoneAuthProvider();
    //   const res = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
    //   setVerificationId(res);
    //   if(verificationId){
          navigation.navigate(OPTSIGNUP, {verificationId: verificationId});
    //   }
    // } catch (err) {
    //   alert(err);
    // }
  };

  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <View style={tailwind('flex-1 justify-between')}>
        <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={firebaseConfig} attemptInvisibleVerification={attemptInvisibleVerification} />

        <View style={style.bg}>
          <Image source={require('./images/phone.png')} style={style.image} />
          <Text style={tailwind('text-center text-lg mt-8 mb-8')}>Welcome to Dating App</Text>

          <View style={tailwind('mb-6')}>
            <PhoneInput
              ref={phoneInput}
              defaultCode="VN"
              placeholder="-- -- -- --   -- -- --   -- -- --"
              defaultValue={phoneValue}
              onChangeFormattedText={setPhoneNumber}
              onChangeText={setPhoneValue}
              withDarkTheme
              withShadow={false}
              autoFocus
              containerStyle={{ backgroundColor: '#f9fafb', width: '80%', borderRadius: 8 }}
              textContainerStyle={{ paddingVertical: 8, borderRadius: 8 }}
            />
          </View>

          <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-2xl text-center w-7/12')} onPress={() => navigation.navigate('OPTSignUp')}>
            <Text style={tailwind('text-center text-white text-lg')} onPress={sendVerificationCode}>
              Next
            </Text>
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
});
