export const modifyEmail = (text) => {
  return {
    type: 'modify_email',
    payload: text
  }
}

export const modifyPassword = (text) => {
  return {
    type: 'modify_pass',
    payload: text
  }
}

export const modifyName = (text) => {
  return {
    type: 'modify_name',
    payload: text
  }
}