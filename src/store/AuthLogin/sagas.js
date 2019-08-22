import {call,put,takeLatest} from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_ERROR } from '../constant';
import { push } from "connected-react-router";
import {Redirect} from 'react-router-dom';
import api from "../../network/index";
function* handleAuthLogin(request) {
  let { payload } = request;
      //console.log("your payload data is:-   ",payload);
  try{
    let response = yield call(api.login, payload);
    if(response.data.status==200){
        yield put({ type: LOGIN_SUCCESS, response});
        console.log("works ###############", response.data.status);
        window.location.replace("/profile");
        // window.location.pathname ='/profile';
        //this.props.history.push('/profile');
      // yield put(push('/profile'))
      localStorage.setItem("Authorization",response.data.token);
     //localStorage.setItem("response",JSON.stringify(response.data));
    //console.log("your response from the server is........ ",response);
    }
   if(response.data.status==401){
     console.log("invalid credentials");
   }
  }
  catch(err){
    console.log("error")
  }
}
  function* watchAuthLogin() {
    yield takeLatest(LOGIN_REQUEST, handleAuthLogin);
  }
  export function* loginSaga() {
    yield watchAuthLogin();
  }
  
