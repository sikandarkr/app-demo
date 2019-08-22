import { LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_ERROR} from '../constant';

export const loginRequest = (payload)=>({
    type:LOGIN_REQUEST,
    payload
});

export const loginSuccess = (payload) =>({
    type:LOGIN_SUCCESS,
    payload
})

export const loginError = (payload) =>({
    type:LOGIN_ERROR,
    payload
});



