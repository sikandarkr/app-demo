import {call,all,put,takeLatest} from 'redux-saga/effects';
import {USER_REQUEST, USER_SUCCESS,USER_ERROR, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_ERROR } from '../constant';
import { push } from "connected-react-router";
import {Redirect} from 'react-router-dom';
import api from "../../network/index";

function* handleFetchUser(request) {
    let { payload } = request;
    console.log("request is comming up");
    let response = yield call(api.user, payload);
    var data =response.data
    console.log("server response is ", data);
    //console.log("here is your server response.... ", response);
    yield put({ type: USER_SUCCESS, data});
}
function* watchFetchUser() {
    yield takeLatest(USER_REQUEST, handleFetchUser);
}

function* handleFetchSearchUser(request) {
    let { payload } = request;
    console.log("your data from navbar", payload);
    let response = yield call(api.searchUser, payload);
    var data =response.data
    //console.log("your user list is ",response);
    yield put({ type:  USER_SUCCESS, data});
}
function* watchFetchSeacrhUser() {
    yield takeLatest(SEARCH_USER_REQUEST, handleFetchSearchUser);
}
export function* userSaga() {
    yield all([watchFetchUser(), watchFetchSeacrhUser() ]);
}

