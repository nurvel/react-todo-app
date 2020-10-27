import { applyMiddleware, compose, createStore, Store } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { AppState, rootReducer } from ".";

import { of } from "rxjs";
import { loadTodosEpic } from "./epics/todoEpics";
import { dummyTodo } from "./actions/todoActions";

const epic1 = () => of(dummyTodo());

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

export default function configureStore(
  initialState?: AppState
): Store<AppState> {
  const rootEpic = combineEpics(epic1);

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
