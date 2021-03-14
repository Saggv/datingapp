import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

export const HomeDetail = ({ navigation }) => {
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <SwiperFlatList
          index={2}
          showPagination
          data={sliderData}
          style={{ backgroundColor: 'red' }}
          renderItem={({ item }) => (
            <View style={[styles.child]}>
              <Image source={item.bgUri} style={styles.photo}></Image>
            </View>
          )}
        />
      </View>

      <View style={styles.detail}>
            <View>
              <Text style={styles.primaryText}>Samanta,27</Text>
            </View>

            <View style={styles.infoWrapper}>
              <Text style={styles.secondaryText}>About me</Text>
              <Text style={styles.paragraph}>My name is Samanta, I like to draw, travel, looking for a guy for a serious relationship.</Text>
            </View>

            <View style={styles.infoWrapper}>
              <Text style={styles.secondaryText}>Location</Text>
              <Text style={styles.paragraph}>Palo Alto, CA</Text>
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
