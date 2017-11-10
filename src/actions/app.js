import B64 from 'base-64';
import firebase from 'firebase';
import _ from 'lodash';
import {
  MODIFY_ADD_CONTACT,
  ADD_CONTACT_ERROR,
  ADD_CONTACT_SUCCESS,
  LIST_CONTACTS_USER,
  MODIFY_MESSAGE,
  SEND_MESSAGE,
  LIST_TALK_USER
} from './types';
import { 
  SEND,
  RECEIVE
} from './status';

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
  return dispatch => {
    const userMail = firebase.auth().currentUser.email;
    const emailUser64 = B64.encode(userMail);
    const emailContact64 = B64.encode(contactEmail);

    firebase.database().ref(`/messages/${emailUser64}/${emailContact64}`)
      .push({ message, type: SEND })
      .then(() => {
        firebase.database().ref(`/messages/${emailContact64}/${emailUser64}`)
        .push({ message, type: RECEIVE })
        .then(() => 
          dispatch({
            type: SEND_MESSAGE,
            payload: message
          })
        );
      })
      .then(() => {
        firebase.database().ref(`/user_talks/${emailUser64}/${emailContact64}`)
          .set({
            nome: contactName,
            email: contactEmail
          });
      })
      .then(() => {
        firebase.database().ref(`/contatos/${emailUser64}`)
          .once('value')
          .then(() => {
            firebase.database().ref(`/user_talks/${emailContact64}/${emailUser64}`)
              .set({
                nome: userMail,
                email: userMail
              });
          });
      });
  };
};

export const userTalkFetch = contactEmail => {
  const contactEmail64 = B64.encode(contactEmail);
  const userEmail64 = B64.encode(firebase.auth().currentUser.email);

  return dispatch => {
    firebase.database().ref(`/messages/${userEmail64}/${contactEmail64}`)
      .on('value', snapshot => {
        dispatch({
          type: LIST_TALK_USER,
          payload: snapshot.val()
        });
      });
  };
};
