import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import SwipeableImage from './SwipeableImage';
import { RectButton } from 'react-native-gesture-handler';

export default function Swipes({ users, currentIndex, handleLike, handlePass, navigation }) {
  const ref = useRef(null);

  const [willLike, setWillLike] = useState(false);
  const [willPass, setWillPass] = useState(false);

  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
      </RectButton>
    );
  };

  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
      </RectButton>
    );
  };

  return (
    <Swipeable
     ref={ref}
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={() => {
        setWillLike(false);
        handlePass(currentIndex);
      }}
      onSwipeableRightOpen={() => {
        setWillPass(false);
        handleLike(currentIndex);
      }}
      onSwipeableLeftWillOpen={() => setWillLike(true)}
      onSwipeableRightWillOpen={() => setWillPass(true)}
      style={styles.wrapper}
    >
      <View style={styles.wrapper}>
        <SwipeableImage user={users[currentIndex]} swipesRef={ref} navigation={navigation}></SwipeableImage>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding:10
  },
  wrapper: {
    width: '100%',
    height: '100%',
    padding:10
  },
});
