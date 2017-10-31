import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const modifyEmail = (text) => {
  return {
    type: 'modify_email',
    payload: text
  }
}

export const modifyPassword = (text) => {
  return {
    type: 'modify_pass',
    payload: text
  }
}

export const modifyName = (text) => {
  return {
    type: 'modify_name',
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
    type: 'add_user_success'
  });
  Actions.welcome(); 
}

const addUserError = (error, dispatch) => {
  dispatch({
    type: 'add_user_error',
    payload: error.message
  })
}

export const authUser = ({ email, senha }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(result => authUserSuccess(dispatch))
    .catch(err => authUserError(err, dispatch));
  }  
}

const authUserSuccess = (dispatch) => {
  dispatch({
    type: 'auth_user_success'
  });

  Actions.main();
}

const authUserError = (error, dispatch) => {
  dispatch({
    type: 'auth_user_error',
    payload: error.message
  });
}
 