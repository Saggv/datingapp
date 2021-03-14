import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './thunks';

import Swipes from '../../components/Swipes';

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {data}= useSelector((state) => state.home);
  const [users, setUsers] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  function handleLike() {
    nextUser();
  }

  function handlePass() {
    nextUser();
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  return (
    <View style={styles.container}>
       {users.length > 1 &&
        users.map(
          (u, i) =>
            currentIndex === i && (
              <Swipes
                key={i}
                currentIndex={currentIndex}
                users={users}
                handleLike={handleLike}
                handlePass={handlePass}
                navigation={navigation}
              ></Swipes>
            )
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
