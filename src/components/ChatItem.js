import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const ChatItem = ({ navigation })  => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ChatDetail')}>
      <TouchableOpacity style={styles.chatItemPhoto}>
        <Image style={styles.photo} source={{ uri: 'https://picsum.photos/200' }} />
      </TouchableOpacity>

      <View style={styles.chatContent}>
        <View style={styles.chatText}>
          <Text style={styles.textHeader}>Rose</Text>
          <Text style={styles.paragraph}>Would you like to go to the...</Text>
        </View>

        <View style={styles.chatDetail}>
          <Text style={styles.smallText}>21:16</Text>
          <Text style={styles.unread}>2</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 8
  },

  chatItemPhoto: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  photo:{
    width: '100%',
    height: '100%',
    resizeMode:  'cover',
    borderRadius: 50
  },

  chatContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f7f7f7',
    paddingVertical: 10,
  },

  textHeader: {
    fontSize: 20,
    fontWeight: '600',
  },

  paragraph: {
    color: '#333',
  },

  chatDetail: {
    textAlign: 'right',
    alignItems: 'flex-end',
  },

  smallText: {
    color: '#777',
  },

  unread: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDAAA3',
    borderRadius: 50,
    color: '#fff',
    width: 20,
    height: 20,
    textAlign: 'center',
    marginTop: 5,
  },
});
