import React from 'react';
import {View,  StyleSheet, Image, Text} from 'react-native';

export const NotFoundScreen = ({headerText, subText}) =>{
  return(
    <View style={styles.container}>
    <View style={styles.NotFoundPage}>
    <Text style={styles.primaryText}>{headerText}</Text>
    <Text style={styles.subText}>{subText}</Text>
    <Image style={styles.NotFoundImage} source={require('../assets/images/page-not-found.png')} />
  </View>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },

  NotFoundPage: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column'
  },

  primaryText: {
    fontSize: 30,
    color: '#333',
    textAlign: 'center'
  },

  subText: {
    marginBottom: 10,
    textAlign: 'center'
  },

  NotFoundImage: {
    width: 150,
    height: 150,
    marginHorizontal: 'auto',
    alignSelf: 'center'
  },
})