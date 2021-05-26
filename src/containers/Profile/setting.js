import React, {useEffect, useState, useLayoutEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import {logout} from '../App/authSlice';
import { useDispatch } from 'react-redux'

const SettingScreen =({ navigation })=> {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        height: 50,
        backgroundColor: '#fff', //Set Header color
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: '#333', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'normal', //Set Header text style
      },
    });
  }, [navigation]);

  const data = [
    {
      label: 'Account',
      child:[
        {
          label: 'Change password',
          icon: 'chevron-right'
        },
        {
          label: 'Change phone number',
          icon: 'chevron-right'
        },
        {
          label: 'Notification',
          icon: 'chevron-right'
        },
      ]
    },
    {
      label: 'Subscription Management',
      child:[
        {
          label: 'Change plan',
          icon: 'chevron-right'
        },
        {
          label: 'Tern & conditions',
          icon: 'chevron-right'
        },
        {
          label: 'Privacy policy',
          icon: 'chevron-right'
        },
      ]
    }
  ];

  const Logout = () =>{
    dispatch(logout());
     navigation.navigate('Login');
  };

  return(
    <View style={styles.container}>
      {
        data.map((item, index) =>(
          <View key={index} style={styles.wrapperItem}>
            <Text style={styles.headerLabel}>{item.label}</Text>
            {
              item.child.map((child, index )=>(
                <TouchableOpacity key={index} style={styles.item}>
                <Text style={styles.itemText}>{child.label}</Text>
                <Feather name={child.icon} size={24} color="#374151" />
              </TouchableOpacity>
              ))
            }
          </View>
        ))
      }
      <TouchableOpacity style={styles.button} onPress={() => Logout()}>
        <Text style={styles.buttonText}>
            <Text >Logout</Text>
            <Text>  </Text>
        <AntDesign name="logout" size={12} color="#FDAAA3" />
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },

  wrapperItem:{
  },

  headerLabel:{
    backgroundColor: '#f9f9f9',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontWeight: '700',
    color: '#333',
  },

  item:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 16
  },

  button:{
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    borderColor: '#FDAAA3',
    borderWidth: 1,
    marginVertical: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },

  buttonText:{
    textAlign: 'center',
    color: '#FDAAA3',
  }
})

export default SettingScreen;