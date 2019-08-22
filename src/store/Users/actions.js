import { USER_REQUEST, USER_SUCCESS,USER_ERROR, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_ERROR} from '../constant';

export const userRequest = (payload)=>({
    type:USER_REQUEST,
    payload
});

export const loginSuccess = (payload) =>({
    type:USER_SUCCESS,
    payload
})

export const loginError = (payload) =>({
    type:USER_ERROR,
    payload
});

export const searchuserRequest = (payload)=>({
    type:SEARCH_USER_REQUEST,
    payload
});

export const searchloginSuccess = (payload) =>({
    type:SEARCH_USER_SUCCESS,
    payload
})

export const searchloginError = (payload) =>({
    type:SEARCH_USER_ERROR,
    payload
});




