import * as firebase from "firebase";
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLbh-MDEa84SCpESYmR2N3jGsYJsT9lSw",
    authDomain: "highli.firebaseapp.com",
    databaseURL: "https://highli.firebaseio.com",
    projectId: "highli",
    storageBucket: "highli.appspot.com",
    messagingSenderId: "534949419287",
    appId: "1:534949419287:web:359c1878c53a6157"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const fireStore = firebase.firestore();

export default fireStore