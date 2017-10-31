import firebase from 'firebase';

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
  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(user => console.log(user))
    .catch(err => console.log(err));

  return {
    type: 'add_user',
    payload: nome
  }
}

