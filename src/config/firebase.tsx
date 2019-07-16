import * as firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2GGWQpRAtHm09G1sUrqGwz3JK52U3YHE",
    authDomain: "kyiv-capitals.firebaseapp.com",
    databaseURL: "https://kyiv-capitals.firebaseio.com",
    projectId: "kyiv-capitals",
    storageBucket: "",
    messagingSenderId: "241769066481",
    appId: "1:241769066481:web:4a0b921a1a0053f3"
};
firebase.initializeApp(firebaseConfig);
const fireStore = firebase.firestore()

export default fireStore