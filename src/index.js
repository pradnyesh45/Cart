import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAf8_POETwoGhyDkglLts14SajaSF0QoUk",
  authDomain: "cart-4cbdb.firebaseapp.com",
  databaseURL: "https://cart-4cbdb.firebaseio.com",
  projectId: "cart-4cbdb",
  storageBucket: "cart-4cbdb.appspot.com",
  messagingSenderId: "177707996007",
  appId: "1:177707996007:web:d356499c8df167618dd5c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

