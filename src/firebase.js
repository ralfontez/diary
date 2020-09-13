import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCOp8XzUl_xPiHKYamjxPmybm0E2D8pHkw",
    authDomain: "diary-c0e19.firebaseapp.com",
    databaseURL: "https://diary-c0e19.firebaseio.com",
    projectId: "diary-c0e19",
    storageBucket: "",
    messagingSenderId: "634558499099"
};

firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();