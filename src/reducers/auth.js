import {
  MODIFY_EMAIL,
  MODIFY_PASS,
  MODIFY_NAME,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR
 } from '../actions/types';

const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  newUserError: '',
  authError: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case MODIFY_EMAIL:
      return { ...state, email: action.payload }
    case MODIFY_PASS:
      return { ...state, senha: action.payload }
    case MODIFY_NAME:
      return { ...state, nome: action.payload }
    case ADD_USER_ERROR:
      return { ...state, newUserError: action.payload }
    case ADD_USER_SUCCESS:
      return { ...state, nome: '', senha: '' }
    case AUTH_USER_SUCCESS:
      return { ...state }
    case AUTH_USER_ERROR:
      return { ...state, authError: action.payload}
    default:
      return state
  }
};
