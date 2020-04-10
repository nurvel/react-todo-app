import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Store } from "redux";
import App from "./App";

interface RootAttributes {
  store: Store;
}

type RootProps = RootAttributes;

const Root = ({ store }: RootProps) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>
);

export default Root;
