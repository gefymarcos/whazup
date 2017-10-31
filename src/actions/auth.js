import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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
    .then(user => addUserSuccess(dispatch))
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