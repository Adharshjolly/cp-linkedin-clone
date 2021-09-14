import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbiV0DCfH1v4B0O04RqczQWQ86Zsslrcc",
  authDomain: "aj-codes-clone-4.firebaseapp.com",
  projectId: "aj-codes-clone-4",
  storageBucket: "aj-codes-clone-4.appspot.com",
  messagingSenderId: "377070319845",
  appId: "1:377070319845:web:f79d566c49f3ce46a57c0c",
  measurementId: "G-YJ6XQL2MB2",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
