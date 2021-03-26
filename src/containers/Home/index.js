import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './thunks';

import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Slider } from '@miblanchard/react-native-slider';

import { Ionicons } from '@expo/vector-icons';

import Swipes from '../../components/Swipes';

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);
  const [users, setUsers] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gender, setGender] = useState(0);
  const [value, setValue] = useState([ 18, 28]);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text {...props} style={{ color: '#333', fontWeight: '600', textAlign: 'center', fontSize: 18 }}>
          Likeme
        </Text>
      ),
      headerStyle: {
        height: 50,
        backgroundColor: '#fff', //Set Header color
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: 'red', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => alert('This funcion is comming soon :))')} style={{ marginLeft: 10 }}>
          <Ionicons name="md-reload-outline" size={20} color="#333" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => setVisible(true)} style={{ marginRight: 10 }}>
          <Ionicons name="ios-filter-outline" size={24} color="#333" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
  };

  function submitFilter(){
    setVisible(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.filterHeader}>
                <TouchableOpacity style={[styles.btn, {marginLeft: -15}]} onPress={()=>setVisible(false)}>
                  <Ionicons name="ios-close-outline" size={24} color="black" />
                </TouchableOpacity>

                <Text style={styles.filterTitle}>Filters</Text>

                <TouchableOpacity style={[styles.btn, {marginRight: -15}]} onPress={submitFilter}>
                  <Ionicons name="checkmark-sharp" size={24} color="#FDAAA3" />
                </TouchableOpacity>
              </View>

              <View style={styles.filterContent}>
                <View style={styles.location}>
                <Text style={styles.filterText}>Location</Text>
                  <TextInput style={styles.inputLocation} placeholder="Location" />
                </View>

                <View style={{marginVertical: 16}}>
                  <Text style={styles.filterText}>Gender</Text>
                  <SegmentedControlTab 
                  values={['Female', 'Male', 'Shemale']} 
                  tabStyle={{borderColor: '#FDAAA3', color: '#333'}} 
                  activeTabStyle={{backgroundColor: '#FDAAA3'}}
                  tabTextStyle={{color: '#333'}}
                  tabsContainerStyle={{height: 38}}
                  selectedIndex={gender} 
                  onTabPress={(index) => setGender(index)}
                   />
                </View>

                <View style={styles.filterAge}>
                  <Text style={styles.filterText}>Age <Text style={{fontSize: 16}}>({value.join(" - ")})</Text></Text>
                  <Slider animateTransition maximumTrackTintColor="#ccc" maximumValue={35} minimumTrackTintColor="#FDAAA3" minimumValue={16} step={2} value={value} thumbTintColor="#FDAAA3" onValueChange={(value) => setValue(value)}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {users.length > 1 && users.map((u, i) => currentIndex === i && <Swipes key={i} currentIndex={currentIndex} users={users} handleLike={handleLike} handlePass={handlePass} navigation={navigation}></Swipes>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 16,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5
  },

  filterTitle: {
    fontSize: 20,
    fontWeight: '600',
  },

  filterText:{
    fontSize: 16, fontWeight: '600', marginBottom: 10, color: '#333'
  },

  btn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  inputLocation:{
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 10
  }
});
