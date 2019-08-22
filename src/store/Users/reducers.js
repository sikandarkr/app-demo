import { USER_ERROR, USER_SUCCESS, USER_REQUEST , SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_ERROR} from "../constant";
const initialState = {
  //isSuccess: false,
  user: {}
};
export default (state = initialState, action) => {
  let newState = { ...state };
  console.log("rdrtgfcgfcgfdgrdgr", action.data)
  switch (action.type) {
    case USER_REQUEST:
      newState = { ...state, loading: true };
      break;
    case USER_SUCCESS:
      newState = {
        ...state,
        users: action.data.data,
        error: null,
        isSuccess: true
      };
      break;
    case USER_ERROR:
      newState = {
        ...state,
        error: action.error.response,
        users: null,
        isSuccess: false
      };
      break;

      case SEARCH_USER_REQUEST:
        newState = { ...state, loading: true };
        break;
      case SEARCH_USER_SUCCESS:
        newState = {
          ...state,
          users: action.data.data,
          error: null,
          isSuccess: true
        };
        break;
      case SEARCH_USER_ERROR:
        newState = {
          ...state,
          error: action.error.response,
          users: null,
          isSuccess: false
        };
        break;
    default:
      newState = newState;
  }
  return newState;
};