import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyCpnInpIQ1J5vpWPmkXAhRv1vwCApRXozw",
  authDomain: "danish-disney-clone-67dfa.firebaseapp.com",
  projectId: "danish-disney-clone-67dfa",
  storageBucket: "danish-disney-clone-67dfa.appspot.com",
  messagingSenderId: "446157849671",
  appId: "1:446157849671:web:576a9a8a308585569b9d62",
  measurementId: "G-JG453QZGQ3",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;
