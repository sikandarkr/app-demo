import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore,compose, } from "redux";
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { rootReducer, rootSaga } from "./store";
import { logger } from "redux-logger";

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: storage,
  debug: true
}
const persistedReducer = persistReducer(persistConfig,rootReducer(history));
let middleware = [];
middleware.push(routerMiddleware(history))
middleware.push(sagaMiddleware);
//middleware.push(logger);

// export default function configureStore(initialState) {
//   //const store = createStore(rootReducer(history),compose(applyMiddleware(...middileware)));
//   let store = createStore(rootReducer(history), {}, applyMiddleware(...middleware));
//   sagaMiddleware.run(rootSaga);
//   return store;
// }
export default function configureStore(initialState) {
  //const store = createStore(rootReducer(history),compose(applyMiddleware(...middileware)));
  let store = createStore(persistedReducer, {}, applyMiddleware(...middleware));
  sagaMiddleware.run(rootSaga);
  return store;
}



// const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);
// return  store;