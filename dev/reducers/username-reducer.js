
export default (state = null, action) => {

  if (action.type === 'USER_LOGIN') {
    return action.payload;
  }
  
  return state;
}