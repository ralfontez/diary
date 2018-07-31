import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAov9Af8FzcrHB7QTE64xAIBKwxzfd9yzQ",
    authDomain: "myownproject-94bb0.firebaseapp.com",
    databaseURL: "https://myownproject-94bb0.firebaseio.com",
    projectId: "myownproject-94bb0",
    storageBucket: "myownproject-94bb0.appspot.com",
    messagingSenderId: "537800335694"
};

firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();