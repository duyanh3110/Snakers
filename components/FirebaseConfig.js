import * as firebase from 'firebase';

// Intialize Firebase
var config = {
  apiKey: "AIzaSyBoS0ZYQ3QCFSFV74fJz0w_h8uoFH_BuZM",
  authDomain: "snackers-9ff5b.firebaseapp.com",
  databaseURL: "https://snackers-9ff5b.firebaseio.com",
  projectId: "snackers-9ff5b",
  storageBucket: "snackers-9ff5b.appspot.com",
  messagingSenderId: "881940158467"
  };

export const firebaseApp = firebase.initializeApp(config);
