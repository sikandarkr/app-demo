import { register_request } from '../constant';
const initialState = {
    isSuccess:false,
    user:{}
}
export default (state=initialState, action) =>{
    let newState = {...state};
    switch(action.type){
        case register_request.REGISTER_REQUEST:
            newState = {...state,loading: true};
            break;
        case register_request.REGISTER_SUCCESS:
            newState = {
                ...state,
                registerInfo:action.response,
                isSuccess:true,
                error:null,
                loading: false
            };
            break;
        case register_request.REGISTER_ERROR:
            newState = {
                ...state,
                error:action.error.response,
                registerInfo:action.response,
                isAuthenticated: false, 
                loading: false
            }
            break;
            default:
              newState = newState;
    }
    return newState;
}