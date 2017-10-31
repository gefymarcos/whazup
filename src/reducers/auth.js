const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modify_email':
      return { ...state, email: action.payload }
    case 'modify_pass':
      return { ...state, senha: action.payload }
    case 'modify_name':
      return { ...state, nome: action.payload }
    case 'add_user_error':
      return { ...state, error: action.payload }
    case 'add_user_success':
      return { ...state, nome: '', senha: '' }
    default:
      break;
  }
  return state;
};
