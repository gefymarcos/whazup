import B64 from 'base-64';
import firebase from 'firebase';
import _ from 'lodash';
import {
  MODIFY_ADD_CONTACT,
  ADD_CONTACT_ERROR,
  ADD_CONTACT_SUCCESS,
  LIST_CONTACTS_USER,
  MODIFY_MESSAGE,
  SEND_MESSAGE
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
              const dadosUsuario = _.first(_.values(snapshot.val()));
              const { currentUser } = firebase.auth();
              const emailUser64 = B64.encode(currentUser.email);
              firebase.database().ref(`/userContacts/${emailUser64}`)
                .push({ 
                  email, 
                  nome: dadosUsuario.nome
                })
                .then(() => addContactSuccess(dispatch))
                .catch((err) => addContactError(err.message, dispatch));
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

const addContactError = (error, dispatch) => (
  dispatch({
    type: ADD_CONTACT_ERROR,
    payload: error
  })
);

const addContactSuccess = dispatch => (
  dispatch({
    type: ADD_CONTACT_SUCCESS,
    payload: true
  })
);

export const newIncludeContact = () => (
  {
    type: ADD_CONTACT_SUCCESS,
    payload: false
  } 
);

export const fetchContactsUser = () => {
  const { currentUser } = firebase.auth();
  
  return (dispatch) => {
    const emailUser64 = B64.encode(currentUser.email);
      firebase.database().ref(`/userContacts/${emailUser64}`)
        .on('value', snapshot => {
          dispatch({
            type: LIST_CONTACTS_USER,
            payload: snapshot.val()
          });
        });
  };
};

export const modifyMessage = text => {
  return ({
    type: MODIFY_MESSAGE,
    payload: text
  });
};

export const sendMessage = (message, contactName, contactEmail) => {
  return ({
    type: SEND_MESSAGE,
    payload: message
  });
};
