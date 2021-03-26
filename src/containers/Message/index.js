import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';

import { ChatItem, Search } from '../../components';

const MessageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        contentContainerStyle={styles.wrapper}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={{paddingHorizontal: 8}}>
            <Search />
            </View>

            <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 9, 5, 6].map((user) => (
                <View style={styles.user} key={user}>
                  <Image style={styles.userPhoto} source={{ uri: 'https://picsum.photos/200' }} />
                </View>
              ))}
            </ScrollView>
          </View>
        }
        renderItem={({ item }) => (
            <ChatItem navigation={navigation} />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  header: {
    flex: 1,
    paddingVertical: 10,
  },

  primaryText: {
    textAlign: 'center',
    fontSize: 26,
    color: '#fff',
  },

  scrollView: {
    marginVertical: 10,
  },

  user: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
    marginHorizontal: 5,
  },

  userPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 50,
  },

  wrapper: {
    backgroundColor: '#fff',
  },
});

export { MessageScreen };
