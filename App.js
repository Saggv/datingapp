import {StatusBar} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import { useFonts } from 'expo-font';

// import {AppLoading} from 'expo';

// import others
import {persistor, store} from './src/config/configStore';
import AppNavigation from './src/navigations/AppNavigation';

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
  // });

  // if( !fontsLoaded ) {
  //   return <AppLoading/>
  // }


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}

