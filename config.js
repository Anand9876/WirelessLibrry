import firebase from 'firebase';
require('@firebase/firestore')
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBCpwWYG0bJbT_SliZkWjmKmfa5izCYuHc",
  authDomain: "wily-app-57e68.firebaseapp.com",
  projectId: "wily-app-57e68",
  storageBucket: "wily-app-57e68.appspot.com",
  messagingSenderId: "711170934640",
  appId: "1:711170934640:web:a97110d5245bb234f1f1b5"
};
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore()