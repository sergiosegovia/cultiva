import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyBpySUXZtdMS9HR9UZ6enTuatdNqe2vQ7M",
  authDomain: "cultiva-2018.firebaseapp.com",
  databaseURL: "https://cultiva-2018.firebaseio.com",
  projectId: "cultiva-2018",
  storageBucket: "",
  messagingSenderId: "831940753648"
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
