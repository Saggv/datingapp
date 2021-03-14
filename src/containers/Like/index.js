import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import LikeThumbnail from '../../components/LikeThumbnail';

const LikeScreen = () => {
  const likes = [1, 2, 3, 4, 5, 6, 7];
  return (
      <FlatList
        data={likes}
        numColumns={2}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.primaryText}>Your preferences</Text>
            <Text style={styles.paragraph}>Here you can see the people you like. Here you can reciprocate.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <LikeThumbnail />
          </View>
        )}
        keyExtractor={item => item}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingBottom: 8
  },

  header:{
    paddingBottom: 16,
    paddingTop: 8
  },

  primaryText: {
    fontSize: 26,
    textAlign: 'center',
    color: '#333',
    marginVertical: 10,
  },

  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    paddingHorizontal: 20,
  },

  wrapper: {
    flex: 1,
    padding: 8,
  },
});

export { LikeScreen };
