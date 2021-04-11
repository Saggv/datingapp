import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

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

export { firebase, firestore };


// t {
//   "SP": null,
//   "gP": t {
//     "Je": Array [],
//     "Ze": "F",
//     "collectionGroup": null,
//     "en": t {
//       "Ye": "users|f:phone==+84859531605,password==123456,|ob:__name__asc,",
//       "collectionGroup": null,
//       "endAt": null,
//       "filters": Array [
//         e {
//           "field": e {
//             "len": 1,
//             "offset": 0,
//             "segments": Array [
//               "phone",
//             ],
//           },
//           "op": t {
//             "name": "==",
//           },
//           "value": e {
//             "Ne": 4,
//             "Zt": "+84859531605",
//           },
//         },
//         e {
//           "field": e {
//             "len": 1,
//             "offset": 0,
//             "segments": Array [
//               "password",
//             ],
//           },
//           "op": t {
//             "name": "==",
//           },
//           "value": e {
//             "Ne": 4,
//             "Zt": "123456",
//           },
//         },
//       ],
//       "limit": null,
//       "orderBy": Array [
//         t {
//           "dir": t {
//             "name": "asc",
//           },
//           "field": e {
//             "len": 1,
//             "offset": 0,
//             "segments": Array [
//               "__name__",
//             ],
//           },
//           "wn": true,
//         },
//       ],
//       "path": e {
//         "len": 1,
//         "offset": 0,
//         "segments": Array [
//           "users",
//         ],
//       },
//       "startAt": null,
//     },
//     "endAt": null,
//     "filters": Array [
//       e {
//         "field": e {
//           "len": 1,
//           "offset": 0,
//           "segments": Array [
//             "phone",
//           ],
//         },
//         "op": t {
//           "name": "==",
//         },
//         "value": e {
//           "Ne": 4,
//           "Zt": "+84859531605",
//         },
//       },
//       e {
//         "field": e {
//           "len": 1,
//           "offset": 0,
//           "segments": Array [
//             "password",
//           ],
//         },
//         "op": t {
//           "name": "==",
//         },
//         "value": e {
//           "Ne": 4,
//           "Zt": "123456",
//         },
//       },
//     ],
//     "limit": null,
//     "path": e {
//       "len": 1,
//       "offset": 0,
//       "segments": Array [
//         "users",
//       ],
//     },
//     "startAt": null,
//     "tn": Array [
//       t {
//         "dir": t {
//           "name": "asc",
//         },
//         "field": e {
//           "len": 1,
//           "offset": 0,
//           "segments": Array [
//             "__name__",
//           ],
//         },
//         "wn": true,
//       },
//     ],
//   },
//   "iP": undefined,
//   "metadata": t {
//     "fromCache": false,
//     "hasPendingWrites": false,
//   },
//   "nP": t {
//     "$E": t {
//       "tl": [Function anonymous],
//     },
//     "BE": FirebaseAppImpl {
//       "automaticDataCollectionEnabled_": false,
//       "container": ComponentContainer {
//         "name": "[DEFAULT]",
//         "providers": Map {
//           "app" => Provider {
//             "component": Component {
//               "instanceFactory": [Function anonymous],
//               "instantiationMode": "LAZY",
//               "multipleInstances": false,
//               "name": "app",
//               "serviceProps": Object {},
//               "type": "PUBLIC",
//             },
//             "container": [Circular],
//             "instances": Map {
//               "[DEFAULT]" => [Circular],
//             },
//             "instancesDeferred": Map {},
//             "name": "app",
//           },
//           "platform-logger" => Provider {
//             "component": Component {
//               "instanceFactory": [Function anonymous],
//               "instantiationMode": "LAZY",
//               "multipleInstances": false,
//               "name": "platform-logger",
//               "serviceProps": Object {},
//               "type": "PRIVATE",
//             },
//             "container": [Circular],
//             "instances": Map {},
//             "instancesDeferred": Map {},
//             "name": "platform-logger",
//           },
//           "fire-core-rn-version" => Provider {
//             "component": Component {
//               "instanceFactory": [Function anonymous],
//               "instantiationMode": "LAZY",
//               "multipleInstances": false,
//               "name": "fire-core-rn-version",
//               "serviceProps": Object {},
//               "type": "VERSION",
//             },
//             "container": [Circular],
//             "instances": Map {},
//             "instancesDeferred": Map {},
//             "name": "fire-core-rn-version",
//           },
//           "fire-js-version" => Provider {
//             "component": Component {
//               "instanceFactory": [Function anonymous],
//               "instantiationMode": "LAZY",
//               "multipleInstances": false,
//               "name": "fire-js-version",
//               "serviceProps": Object {},
//               "type": "VERSION",
//             },
//             "container": [Circular],
//             "instances": Map {},
//             "instancesDeferred": Map {},
//             "name": "fire-js-version",
//           },
//           "auth" => Provider {
//             "component": Object {
//               "instanceFactory": [Function instanceFactory],
//               "instantiationMode": "LAZY",
//               "multipleInstances": false,
//               "name": "auth",
//               "serviceProps": Object {
//                 "ActionCodeInfo": Object {
//                   "Operation": Object {
//                     "EMAIL_SIGNIN": "EMAIL_SIGNIN",
//                     "PASSWORD_RESET": "PASSWORD_RESET",
//                     "RECOVER_EMAIL": "RECOVER_EMAIL",
//                     "VERIFY_EMAIL": "VERIFY_EMAIL",
//                   },
//                 },
//                 "ActionCodeURL": [Function d],
//                 "Auth": [Function Lm],
//                 "AuthCredential": [Function kg],
//                 "EmailAuthProvider": [Function d],
//                 "Error": [Function M],
//                 "FacebookAuthProvider": [Function d],
//                 "GithubAuthProvider": [Function d],
//                 "GoogleAuthProvider": [Function d],
//                 "OAuthProvider": [Function d],
//                 "PhoneAuthProvider": [Function d],
//                 "RecaptchaVerifier": [Function d],
//                 "SAMLAuthProvider": [Function d],
//                 "TwitterAuthProvider": [Function d],
//               },
//               "type": "PUBLIC",
//             },
//             "container": [Circular],
//             "instances": Map {
//               "[DEFAULT]" => Object {
//                 "apiKey": "AIzaSyDPqLPNyDO2MOaduhTn8YhlkMbcUa3m3OQ",
//                 "appName": "[DEFAULT]",
//                 "authDomain": "friends-35100.firebaseapp.com",
//                 "currentUser": Object {
//                   "apiKey": "AIzaSyDPqLPNyDO2MOaduhTn8YhlkMbcUa3m3OQ",
//                   "appName": "[DEFAULT]",
//                   "authDomain": "friends-35100.firebaseapp.com",
//                   "createdAt": "1616947498838",
//                   "displayName": null,
//                   "email": null,
//                   "emailVerified": false,
//                   "isAnonymous": false,
//                   "lastLoginAt": "1617001511710",
//                   "phoneNumber": "+84859531605",
//                   "photoURL": null,
//                   "providerData": Array [
//                     Object {
//                       "displayName": null,
//                       "email": null,
//                       "phoneNumber": "+84859531605",
//                       "photoURL": null,
//                       "providerId": "phone",
//                       "uid": "+84859531605",
//                     },
//                   ],
//                   "redirectEventId": null,
//                   "stsTokenManager": Object {
//                     "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOGM3OTdlMDQ5YWFkZWViOWM5M2RiZGU3ZDAwMzJmNjk3NjYwYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZnJpZW5kcy0zNTEwMCIsImF1ZCI6ImZyaWVuZHMtMzUxMDAiLCJhdXRoX3RpbWUiOjE2MTcwMDE1MTEsInVzZXJfaWQiOiJGUDQ3cGFGdlhFZ1dxOUlKOGs1ZHZRRkFGZVAyIiwic3ViIjoiRlA0N3BhRnZYRWdXcTlJSjhrNWR2UUZBRmVQMiIsImlhdCI6MTYxNzk1OTQ0NSwiZXhwIjoxNjE3OTYzMDQ1LCJwaG9uZV9udW1iZXIiOiIrODQ4NTk1MzE2MDUiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDg1OTUzMTYwNSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.VG8Xr0oLkHTnbZGtE0AVMMckD2PiKGV04Qx6Lvb7rUTwCZIkhzw-uaUnlLT6ed5-trk7a9HMOQ4Hlvtu6CmaSGtcZaxyIv2xqU0es_tLhhxpGiTvqCejjV99HE-4LlOYalmnZy4TfSlAoB-8nHwxOxarZVyc9j572Tyhvae5E-q9h3gkM1z-Qag_BuLZt59GEQJB2n6NCwnJyndolnnwspA4rXt3UP1BawG8AAlBs6kHyuxZI1cxl7CcRLkgnTX_9ChWggxWUEHxjHBYk8TxPDcNaf3MentsMDJYk5IIm-xOvozo9WFlmyIVGRqEESN070ZQL9O5O_A4H0aHUivCDg",
//                     "apiKey": "AIzaSyDPqLPNyDO2MOaduhTn8YhlkMbcUa3m3OQ",
//                     "expirationTime": 1617963046964,
//                     "refreshToken": "AGEhc0CeBrQBoENo8WFLdUiQTQiFxgc2tKkz2rsJlawPxb3sHvBa80t4Nhaiy_9oLHKlvubDiGT811W_-yYp5QrSZv8expPJYzj6WFDw0JhfHTh8svx5UbBtUwiuw0m0HYia8rEKqCd1iZzakSicBeczyTc-A3495rgatBaqmsR4CuYD0gL9y927QhDemMc_xqtcY0YVe87a",
//                   },
//                   "tenantId": null,
//                   "uid": "FP47paFvXEgWq9IJ8k5dvQFAFeP2",
//                 },
//               },
//             },
//             "instancesDeferred": Map {},
//             "name": "auth",
//           },
//           "auth-internal" => Provider {
//             "component": Object {
//               "instanceFactory": [Function instanceFactory],
//               "instantiationMode": "LAZY",
//               "multipleInstances": false,
//               "name": "auth-internal",
//               "type": "PRIVATE",
//             },
//             "container": [Circular],
//             "instances": Map {
//               "[DEFAULT]" => Object {
//                 "addAuthTokenListener": [Function bound ],
//                 "getToken": [Function bound ],
//                 "getUid": [Function bound ],
//                 "removeAuthTokenListener": [Function bound ],
//               },
//             },
//             "instancesDeferred": Map {},
//             "name": "auth-internal",
//           },
//           "fire-auth-version" => Provider {
//             "component": Component {
//               "instanceFactory": [Function anonymous],
//               "instantiationMode": "LAZY",
//               "multipleInstances": false,
//               "name": "fire...(truncated to the first 10000 characters)