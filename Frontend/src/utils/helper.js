import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBOGBk6RkRhk7jZiKGFVJJbIIdlLJ-mzLQ",
    authDomain: "bearbulls-a6511.firebaseapp.com",
    projectId: "bearbulls-a6511",
    storageBucket: "bearbulls-a6511.appspot.com",
    messagingSenderId: "781124020021",
    appId: "1:781124020021:web:b252a58d00807687fe8e7c",
    measurementId: "G-1XE163BWWB"
  };

  firebase.initializeApp(firebaseConfig);

  const storage =firebase.storage();

  export {storage, firebase as default};