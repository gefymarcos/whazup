import {
  MODIFY_ADD_CONTACT,
  ADD_CONTACT_ERROR,
  ADD_CONTACT_SUCCESS,
  MODIFY_MESSAGE,
  SEND_MESSAGE
} from '../actions/types';

const INITIAL_STATE = {
  addContactEmail: '',
  errorAddContact: '',
  successAddContact: false,
  message: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFY_ADD_CONTACT:
      return { ...state, addContactEmail: action.payload };
    case ADD_CONTACT_ERROR:
      return { ...state, errorAddContact: action.payload };
    case ADD_CONTACT_SUCCESS:
      return { ...state, successAddContact: action.payload, addContactEmail: '' };
    case MODIFY_MESSAGE:
      return { ...state, message: action.payload };
    case SEND_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
