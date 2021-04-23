import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';

import {firestore} from '../../firebase/config';

export const HomeDetail = ({ navigation }) => {
  const [user, setUser] = useState();
  const [age, setAge] = useState();
  const route = useRoute();
  console.log(route.params.id);

  useEffect(()=>{
    firestore.collection('users').doc(route.params.id).get()
    .then(res => {
      setUser(res.data());
      const currentDate = moment().format('DD/MM/YYYY').split("/").map(date => + date);
      const userBirthday = user?.age.split("/").map(date => + date);
      setAge(moment(currentDate.reverse()).diff(moment(userBirthday.reverse()), 'years'));
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  },[navigation])

  const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

  const sliderData = [
    {
      index: 1,
      text: 'The huge base of users',
      bgUri: require('../Tutorial/images/tutorial-bg-1.png'),
      btnText: 'Next',
    },
    {
      index: 2,
      text: 'Choose a preferable browsing mode',
      bgUri: require('../Tutorial/images/tutorial-bg-2.png'),
      btnText: 'Next',
    },
    {
      index: 3,
      text: 'See who liked you',
      bgUri: require('../Tutorial/images/tutorial-bg-3.png'),
      btnText: 'Start',
    },
  ];

  console.log(user);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <SwiperFlatList
          showPagination
          data={[user?.avatarUrl, user?.primaryUrl, user?.secondaryUrl, user?.tertiaryUrl]}
          style={{ backgroundColor: 'red' }}
          renderItem={({ item }) => (
            <View style={[styles.child]}>
              <Image source={{uri: item}} style={styles.photo}></Image>
            </View>
          )}
        />
      </View>

      <View style={styles.detail}>
            <View>
              <Text style={styles.primaryText}>{user?.name}, {age}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <Text style={styles.secondaryText}>About me</Text>
              <Text style={styles.paragraph}>{user?.desc}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <Text style={styles.secondaryText}>Location</Text>
              <Text style={styles.paragraph}>{user?.address}</Text>
            </View>

            <View style={styles.infoWrapper}>
              <Text style={styles.secondaryText}>Interests</Text>
              <Text style={styles.paragraph}>I like to play basketball and tennis, I love pets and active sports. I run in the park every morning.</Text>
            </View>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width,
    flex:1,
    backgroundColor: '#fff',
  },

  wrapper: {
    flex: 1,
    height: height - 130,
  },

  child: {
    flex: 1,
    width,
    justifyContent: 'center',
  },

  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  detail: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 15,
  },

  infoWrapper:{
    marginVertical: 10
  },

  primaryText:{
    fontSize: 30,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '600',
    color: '#333'
  },

  secondaryText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 5
  },

  paragraph:{
    color: '#555'
  }
});
