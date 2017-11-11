import {
  MODIFY_EMAIL,
  MODIFY_PASS,
  MODIFY_NAME,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  LOGIN_INITIATED,
  USER_LOADING
 } from '../actions/types';

const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  newUserError: '',
  authError: '',
  authLoading: false,
  userLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFY_EMAIL:
      return { ...state, email: action.payload };
    case MODIFY_PASS:
      return { ...state, senha: action.payload };
    case MODIFY_NAME:
      return { ...state, nome: action.payload };
    case ADD_USER_ERROR:
      return { ...state, newUserError: action.payload, userLoading: false };
    case ADD_USER_SUCCESS:
      return { ...state, nome: '', senha: '', userLoading: false, newUserError: '' };
    case AUTH_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case AUTH_USER_ERROR:
      return { ...state, authError: action.payload, authLoading: false };
    case LOGIN_INITIATED:
      return { ...state, authLoading: true };
    case USER_LOADING:
      return { ...state, userLoading: true };
    default:
      return state;
  }
};
