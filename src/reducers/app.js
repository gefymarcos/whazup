import {
  MODIFY_ADD_CONTACT
} from '../actions/types';

const INITIAL_STATE = {
  addContactEmail: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFY_ADD_CONTACT:
      return { ...state, addContactEmail: action.payload };
    default:
      return state;
  }
};
