import React from "react";
import App from "./App";

import { Provider } from "react-redux";
import { Store } from "redux";

interface RootAttributes {
  store: Store;
}

type RootProps = RootAttributes;

const Root = ({ store }: RootProps) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
