// firebaseInit.js

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
 
}

export default firebase;

