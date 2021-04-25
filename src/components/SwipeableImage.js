import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';

export default function SwipeableImage({ user, swipesRef }) {
  const navigation = useNavigation(); 

  if (!user) {
    return <Text>Loadding</Text>;
  }

  const handleLike = () => {
    swipesRef.current.openRight();
  };

  const handlePass = () => {
    swipesRef.current.openLeft();
  };

  const openDetail = () =>{
    navigation.navigate('HomeDetail', {id: user._id});
  }

  return (
    <View style={styles.slider}>
      <Image style={styles.image} source={{ uri: user.avatarUrl }}></Image>

      <View style={styles.amountImages}>
        <Ionicons name="images" size={20} color="#fff"  onPress={() =>openDetail()} />
        <Text style={styles.amountImg}></Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handlePass}>
          <Ionicons name="close-outline" size={32} color="#333" />
        </TouchableOpacity>

        <View style={styles.info}>
          <Text style={styles.name}> {user.name}</Text>
          <Text style={styles.job}>{user.address}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLike}>
          <Ionicons name="heart" size={32} color="#fdaaa3" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    width: '100%',
  },
  slider: {
    flex: 1,
    height: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#333',
    shadowRadius: 10,
    shadowOpacity: 1,
    resizeMode: 'cover',
  },

  amountImages: {
    position: 'absolute',
    top: 18,
    left: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },

  amountImg: {
    color: '#fff',
    marginLeft: 5,
  },

  footer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
  },

  info: {
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  
  job: {
    color: '#fff'
  }
});
