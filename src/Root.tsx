import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store } from "redux";
import App from "./App";
import Settings from "./components/Settings/Settings";
import Navigation from "./components/Navigation/Navigation";

interface RootAttributes {
  store: Store;
}

type RootProps = RootAttributes;

const Root = ({ store }: RootProps) => (
  <Provider store={store}>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default Root;
