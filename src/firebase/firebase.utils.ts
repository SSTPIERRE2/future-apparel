import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDbOMHvmxKtL0xLpM93CeHMjbmNUxfsNOQ',
    authDomain: 'future-apparel-db.firebaseapp.com',
    databaseURL: 'https://future-apparel-db.firebaseio.com',
    projectId: 'future-apparel-db',
    storageBucket: 'future-apparel-db.appspot.com',
    messagingSenderId: '154425132213',
    appId: '1:154425132213:web:6855e13f51055e308b6afc',
    measurementId: 'G-5VB2E4EZQJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
