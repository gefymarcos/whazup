import B64 from 'base-64';
import firebase from 'firebase';
import {
  MODIFY_ADD_CONTACT
} from './types';

export const modifyAddContactEmail = text => {
  return {
    type: MODIFY_ADD_CONTACT,
    payload: text
  };
};

export const addContact = email => {
  const emailB64 = B64.encode(email);

  firebase.database().ref(`/contatos/${emailB64}`)
    .once('value')
    .then(snapshot => {
        if (snapshot.val()) {
          console.log('usuario existe');
        } else {
          console.log('usuario não existe');
        }
      }
    )
    .catch(err => console.log(err));

  return {
    type: ''
  };
};
