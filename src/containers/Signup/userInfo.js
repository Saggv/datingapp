import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { Paragraph, RadioButton, Colors, TouchableRipple, useTheme } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { useRoute } from '@react-navigation/native';

import tailwind from 'tailwind-rn';

export const UserInfoScreen = ({ navigation }) => {
  const route = useRoute();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState('Please select your date of bird');
  const [address, setAddress] = useState('');
  const [job, setJob] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = (date) => {
    setAge(moment(date).format('DD/MM/YYYY'));
    setDatePickerVisibility(false);
  };

  const onSubmit =() =>{
    const data = {name, gender, age, address, job, id: route.params.id};
    if(!name || age === 'Please select your date of bird' || !address || !job){
      alert('Please fill all the fields!');
      return;
    }
    navigation.navigate('EditProfile',{data});
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={tailwind('mb-8')}>
          <Text style={tailwind('text-black text-center text-xl')}>Enter your info</Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={tailwind('bg-gray-50 rounded p-2 px-4 border border-t-0 border-l-0 border-r-0 border-gray-400')} onChangeText={setName} placeholder="Enter your name " />
        </View>

        <View style={styles.formGroup}>
          <Text style={[styles.label, tailwind('mb-0 text-black')]}>Gender</Text>

          <TouchableRipple onPress={() => setGender('female')}>
            <View style={styles.row}>
              <Text style={tailwind('w-6/12')}>Female</Text>
              <View pointerEvents="none">
                <RadioButton value="female" status={gender === 'female' ? 'checked' : 'unchecked'} />
              </View>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => setGender('male')}>
            <View style={styles.row}>
              <Text style={tailwind('w-6/12')}>Male</Text>
              <View pointerEvents="none">
                <RadioButton value="male" status={gender === 'male' ? 'checked' : 'unchecked'} />
              </View>
            </View>
          </TouchableRipple>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Date of bird</Text>
          <TouchableOpacity onPress={showDatePicker} style={tailwind('bg-gray-50 text-center rounded p-2 px-4 border border-gray-200')}>
            <Text style={tailwind('text-center text-gray-600')}>{age}</Text>
          </TouchableOpacity>
          <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={() => setDatePickerVisibility(false)} />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={tailwind('bg-gray-50 rounded p-2 px-4 border border-t-0 border-l-0 border-r-0 border-gray-400')} onChangeText={setAddress} placeholder="Enter your address " />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Job</Text>
          <TextInput style={tailwind('bg-gray-50 rounded p-2 px-4 border border-t-0 border-l-0 border-r-0 border-gray-400')} onChangeText={setJob} placeholder="What do you do? " />
        </View>

        <View style={tailwind('px-10')}>
          <TouchableOpacity style={tailwind('py-2 bg-red-300 rounded-xl text-center mt-8')} onPress={onSubmit}>
            <Text style={tailwind('text-center text-white text-lg')}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
  },

  formGroup: {
    marginBottom: 15,
  },

  label: {
    color: '#333',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
});
