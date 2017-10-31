import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Routes from './src/Routes';
import reducers from './src/reducers';

export default class App extends Component {
  
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCCsxbe5fyIIIQ_2pamrv4ci71sTXt9oAs",
      authDomain: "gefy-whazup.firebaseapp.com",
      databaseURL: "https://gefy-whazup.firebaseio.com",
      projectId: "gefy-whazup",
      storageBucket: "gefy-whazup.appspot.com",
      messagingSenderId: "1032386953216"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return( 
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
