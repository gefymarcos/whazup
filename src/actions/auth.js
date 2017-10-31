import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
  MODIFY_EMAIL,
  MODIFY_PASS,
  MODIFY_NAME,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  LOGIN_INITIATED
 } from '../actions/types';

export const modifyEmail = (text) => {
  return {
    type: MODIFY_EMAIL,
    payload: text
  }
}

export const modifyPassword = (text) => {
  return {
    type: MODIFY_PASS,
    payload: text
  }
}

export const modifyName = (text) => {
  return {
    type: MODIFY_NAME,
    payload: text
  }
}

export const addUser = ({ nome, email, senha }) => { 
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(user => {
      let emailB64 = b64.encode(email);

      firebase.database().ref(`/contatos/${emailB64}`)
        .push({ nome })
        .then(value => addUserSuccess(dispatch));
    })
    .catch(err => addUserError(err, dispatch));
  }
}

const addUserSuccess = (dispatch) => {
  dispatch ({
    type: ADD_USER_SUCCESS
  });
  Actions.welcome(); 
}

const addUserError = (error, dispatch) => {
  dispatch({
    type: ADD_USER_ERROR,
    payload: error.message
  })
}

export const authUser = ({ email, senha }) => {
  return dispatch => {

    dispatch({ type: LOGIN_INITIATED })

    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(result => authUserSuccess(dispatch))
    .catch(err => authUserError(err, dispatch));
  }  
}

const authUserSuccess = (dispatch) => {
  dispatch({
    type: AUTH_USER_SUCCESS
  });

  Actions.main();
}

const authUserError = (error, dispatch) => {
  dispatch({
    type: AUTH_USER_ERROR,
    payload: error.message
  });
}
 