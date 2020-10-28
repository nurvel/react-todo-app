import { applyMiddleware, compose, createStore, Store } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { AppState, rootReducer } from ".";
import { appEpic } from "./epics";
import { todoEpic } from "./epics/todoEpics";

// const epic1 = () => of();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

export default function configureStore(
  initialState?: AppState,
  dependencies = {} // for testing inject external dependencies
): Store<AppState> {
  
  // const rootEpic = combineEpics(todoEpic); // Use appEpic

  const epicMiddleware = createEpicMiddleware({
    ...dependencies,
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(appEpic); // initializes epics // HOX: appEpic does not work
  return store;
}
