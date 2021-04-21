import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyDPqLPNyDO2MOaduhTn8YhlkMbcUa3m3OQ',
  authDomain: 'friends-35100.firebaseapp.com',
  databaseURL: 'https://friends-35100.firebaseio.com',
  projectId: 'friends-35100',
  storageBucket: 'friends-35100.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:1033469381135:android:ca3e01a7c86c8d7c5ff17a',
  measurementId: 'G-measurement-id',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

 const firestore =firebase.firestore();

 const storage = firebase.storage();

export { firebase, firestore, storage };
