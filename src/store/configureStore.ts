import { applyMiddleware, compose, createStore, Store } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { AppState, rootReducer } from ".";
import { loadTodosEpic } from "./epics/todoEpics";

// const epic1 = () => of(dummyTodo());

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

export default function configureStore(
  initialState?: AppState
): Store<AppState> {
  const rootEpic = combineEpics(loadTodosEpic);

  const epicMiddleware = createEpicMiddleware();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic); // initializes epics
  return store;
}
