// import node_modules
import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

// import others
import tailwind from 'tailwind-rn';

// main
const sliderData = [
  {
    index: 1,
    text: 'The huge base of users',
    bgUri: require('./images/tutorial-bg-1.png'),
    btnText: 'Next',
  },
  {
    index: 2,
    text: 'Choose a preferable browsing mode',
    bgUri: require('./images/tutorial-bg-2.png'),
    btnText: 'Next',
  },
  {
    index: 3,
    text: 'See who liked you',
    bgUri: require('./images/tutorial-bg-3.png'),
    btnText: 'Start',
  },
];

export const TutorialScreen = ({ navigation }) => {
  const scrollRef = useRef(null);

  const onPressNext = (param) =>{
    if (param >= 2) {
      navigation.navigate('LogSignInScreen');
      return;
    } else {
      scrollRef.current.scrollToIndex({ index: param + 1, animated: true });
    }
  };
  return (<SafeAreaView style={tailwind('flex-1')}>
    <View style={tailwind('flex-1')}>
      <SwiperFlatList
        data={sliderData}
        ref={scrollRef}
        showPagination
        paginationDefaultColor="#FEE2E2"
        paginationActiveColor="#FCA5A5"
        renderItem={({ item, index }) =>(
          <View style={style.child}>
            <ImageBackground
              source={item.bgUri}
              style={style.image}
            >
              <View style={style.content}>
                <TouchableOpacity>
                  {
                    index !== 2 ? (
                      <Text style={tailwind('mt-3 ml-4 text-red-400 text-lg font-semibold')}>Skip</Text>
                    ) : null
                  }
                </TouchableOpacity>
                <View style={tailwind('px-11 mb-16')}>
                  <Text style={style.text}>{item.text}</Text>
                  <TouchableOpacity onPress={() => onPressNext(index)} >
                    <Text style={tailwind('bg-red-400 py-2 rounded-2xl text-white text-center text-lg')}>{item.btnText}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  </SafeAreaView>
  );
};
const { width } = Dimensions.get('window');

const style = StyleSheet.create({
  child: { width, justifyContent: 'center', flex: 1 },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    backgroundColor: '#fff',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 33,
    marginBottom: 25,
  },
});
