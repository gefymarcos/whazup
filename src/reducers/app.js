import {
  MODIFY_ADD_CONTACT,
  ADD_CONTACT_ERROR,
  ADD_CONTACT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  addContactEmail: '',
  errorAddContact: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFY_ADD_CONTACT:
      return { ...state, addContactEmail: action.payload };
    case ADD_CONTACT_ERROR:
      return { ...state, errorAddContact: action.payload };
    case ADD_CONTACT_SUCCESS:
      return { ...state, errorAddContact: action.payload };
    default:
      return state;
  }
};
