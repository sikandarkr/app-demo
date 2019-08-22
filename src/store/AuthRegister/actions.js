import { register_request } from '../constant';

export const registerRequest = (payload)=>({
    type:register_request.REGISTER_REQUEST,
    payload

});

export const registerSuccess = (payload) =>({
    type:register_request.REGISTER_SUCCESS,
    payload
})

export const registerError = (payload) =>({
    type:register_request.REGISTER_ERROR,
    payload
});



