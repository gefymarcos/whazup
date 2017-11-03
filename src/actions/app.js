import B64 from 'base-64';
import firebase from 'firebase';
import {
  MODIFY_ADD_CONTACT,
  ADD_CONTACT_ERROR
} from './types';

export const modifyAddContactEmail = text => {
  return {
    type: MODIFY_ADD_CONTACT,
    payload: text
  };
};

export const addContact = email => {
  return dispatch => {
    const emailB64 = B64.encode(email);
    
      firebase.database().ref(`/contatos/${emailB64}`)
        .once('value')
        .then(snapshot => {
            if (snapshot.val()) {
              console.log(email);
              const { currentUser } = firebase.auth();
              const emailUser64 = B64.encode(currentUser.email);
              firebase.database().ref(`/userContacts/${emailUser64}`)
                .push({ 
                  email, 
                  nome: 'nome'
                })
                .then(() => console.log('success'))
                .catch((err) => console.log(err));
            } else {
              dispatch({
                type: ADD_CONTACT_ERROR,
                payload: 'O e-mail informado não corresponde a um usuário valido.'
              });
            }
          }
        )
        .catch(err => console.log(err));
  };
};

