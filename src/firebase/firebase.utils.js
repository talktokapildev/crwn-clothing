import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCEwGCa3a7vguISEpsfZGSseKTzXk8XstY',
  authDomain: 'crwn-db-fad5d.firebaseapp.com',
  databaseURL: 'https://crwn-db-fad5d.firebaseio.com',
  projectId: 'crwn-db-fad5d',
  storageBucket: 'crwn-db-fad5d.appspot.com',
  messagingSenderId: '815095772339',
  appId: '1:815095772339:web:47cc46ab840b8cc8'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
