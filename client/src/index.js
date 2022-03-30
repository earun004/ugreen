import "babel-polyfill";
import "url-search-params-polyfill";
import "whatwg-fetch";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { usePromiseTracker } from "react-promise-tracker";
import createBrowserHistory from "history/createBrowserHistory";

import reducers from "./reducers";
import App from "./components/App";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="preloader_img">
        <img src="images/loader.gif" className="loader" />
      </div>
    )
  );
};

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <App />
    <LoadingIndicator />
  </Provider>,
  document.querySelector("#root")
);
