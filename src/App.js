import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      user:null
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user})
    });
  }

  logIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then()
      .catch()
  }

  logOut() {
    firebase.auth().signOut()
      .then()
      .catch()
  }

  handleAuth() {
    if(this.state.user) {
      return(
        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <h2> {this.state.user.displayName} </h2>
          <button onClick={this.logOut}>Cerrar sesión</button>
        </div>
      )
    } else {
      return(
        <button onClick={this.logIn}>Inicia sesión con Google</button>
      )
    }
  }

  render() {
    return(
      <div>
        <h1>Cultiva</h1>
        {this.handleAuth()}
      </div>
    )
  }
}

export default App;
