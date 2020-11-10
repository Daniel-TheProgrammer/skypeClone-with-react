import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

import store from "./store";

const log = () => {
  console.log("%c Rendered with ", "background: purple; color:#fff");
  console.log(store.getState());
};

const render = () => {
  log();
  return ReactDOM.render(<App />, document.getElementById("root"));
};
render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
