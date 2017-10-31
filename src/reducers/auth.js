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
    case 'modify_email':
      return { ...state, email: action.payload }
    case 'modify_pass':
      return { ...state, senha: action.payload }
    case 'modify_name':
      return { ...state, nome: action.payload }
    case 'add_user_error':
      return { ...state, newUserError: action.payload }
    case 'add_user_success':
      return { ...state, nome: '', senha: '' }
    case 'auth_user_success':
      return { ...state }
    case 'auth_user_error':
      return { ...state, authError: action.payload}
    default:
      break;
  }
  return state;
};
