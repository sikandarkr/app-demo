import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import "./index.css";
import App from "./App";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import {persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore,{history} from "./configureStore";
//const history = createBrowserHistory();
const store = configureStore();
const persistor = persistStore(store);
console.log("your store data is .....",store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <ConnectedRouter history={history}>
        
      {/* <BrowserRouter> */}
            <App />
      {/* </BrowserRouter> */}
    </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
