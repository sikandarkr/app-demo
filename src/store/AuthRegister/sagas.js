import {call,put,takeLatest} from 'redux-saga/effects';
import {register_request } from '../constant';
//import { push } from "connected-react-router";
import {Redirect} from 'react-router-dom';
import api from "../../network/index";
function* handleAuthRegister(request) {
    let { payload } = request; 
    try{
      let response = yield call(api.signup, payload);
    //console.log("####### your status code from the server is..... ",response.data.status);
    if(response.data.status === 409){
      console.log("****** status code ",response.data.status); 
      yield put({ type: register_request.REGISTER_SUCCESS, response });
    }
    if(response.data.status === 201){
      yield put({ type: register_request.REGISTER_SUCCESS, response }); 
      //yield put(push("/login"));
    }
    }
    catch(err){
      yield put({ type: register_request.REGISTER_ERROR, err });
    }
  }
  function* watchAuthRegister() {
    yield takeLatest(register_request.REGISTER_REQUEST, handleAuthRegister);
   
  }
  export function* registerSaga() {
    yield watchAuthRegister();
  }
  
