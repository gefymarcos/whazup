const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modify_email':
      return { ...state, email: action.payload }
    case 'modify_pass':
      return { ...state, senha: action.payload }

    default:
      break;
  }
  return state;
};
