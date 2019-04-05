import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "whales-softball.firebaseapp.com",
  databaseURL: "https://whales-softball.firebaseio.com",
  projectId: "whales-softball",
  storageBucket: "whales-softball.appspot.com",
  messagingSenderId: "257854638489"
};

const app = firebase.initializeApp (config)
const base = Rebase.createClass(app.datebase())

export { base }