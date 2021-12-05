import firebase from "firebase";
// require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA83RF6V6VROUY1REfaWM995SjfLVQ7wb4",
  authDomain: "riding-4d530.firebaseapp.com",
  projectId: "riding-4d530",
  storageBucket: "riding-4d530.appspot.com",
  messagingSenderId: "402995399587",
  appId: "1:402995399587:web:0c01714bdf2a5238cb2816"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


