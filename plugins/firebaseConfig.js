import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyC6mw0veWVIH0ghM3sK45J1VRD_Q7gYekQ',
    authDomain: 'system-ab028.firebaseapp.com',
    databaseURL: 'https://system-ab028.firebaseio.com',
    projectId: 'system-ab028',
    storageBucket: 'system-ab028.appspot.com',
    messagingSenderId: '290657196021',
    appId: '1:290657196021:web:64fa7a2e3a77101212f2bc',
    measurementId: 'G-DM2SLQYP1W'
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
