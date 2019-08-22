import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_REQUEST } from "../constant";
const initialState = {
  //isSuccess: false,
  user: {}
};
export default (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOGIN_REQUEST:
      newState = { ...state, loading: true };
      break;
    case LOGIN_SUCCESS:
      newState = {
        ...state,
        loginInfo: action.response,
        error: null,
        isSuccess: true
      };
      break;
    case LOGIN_ERROR:
      newState = {
        ...state,
        error: action.error.response,
        loginInfo: null,
        isSuccess: false
      };
      break;
    default:
      newState = newState;
  }
  return newState;
};