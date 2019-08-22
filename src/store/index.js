import { combineReducers } from "redux";
import { all, call } from "redux-saga/effects";
import authReducer from "./AuthRegister/reducers";
import loginReducer from "./AuthLogin/reducers";
import userReducer from "./Users/reducers";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { registerSaga } from "./AuthRegister/sagas";
import {userSaga} from "./Users/sagas";
import {loginSaga} from "./AuthLogin/sagas";

export const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  //might be need to comment the above line
  authReducer,
  loginReducer,
  userReducer
})
export function* rootSaga() {
  yield all([call(registerSaga), call(loginSaga),call(userSaga)]);
}

