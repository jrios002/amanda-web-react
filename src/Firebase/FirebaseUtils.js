import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAvqilp3GlZHlBzkw-IUNoVli70kChg4a0",
    authDomain: "amandawebsite-214618.firebaseapp.com",
    databaseURL: "https://amandawebsite-214618.firebaseio.com",
    projectId: "amandawebsite-214618",
    storageBucket: "amandawebsite-214618.appspot.com",
    messagingSenderId: "928654366383",
    appId: "1:928654366383:web:e84229df564d619564e65a"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  }

  export const lessonsRef = firebase.firestore().collection("lessons");
  
  export const retrieveLessons = async () => {
    let lessonList = [];
    try {
      let response = await fetch('https://shielded-wildwood-95570.herokuapp.com/lessons');
      let data = await response.json();
      lessonList = data.lessons;
      console.log(lessonList, 'Lessons from firebase');
    } catch (error) {
      console.log(error, 'Unable to retrieve list from api');
    }

    return lessonList;
  }
  
  export default firebase;