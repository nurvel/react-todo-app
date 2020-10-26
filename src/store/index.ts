import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todoReducer from "./todos/todoReducer";
import filterReducer from "./filter/todoFilterReducer";

import { TodoActionTypes } from "./todos/todoType";
import { TodoFilterActionTypes } from "./filter/todoFilterType";

const reducer = combineReducers({
  todoState: todoReducer,
  filter: filterReducer
});

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);

export type AppState = ReturnType<typeof reducer>; // kokonaan recuerit - sourse of truth to app state

export type AppActions = TodoActionTypes | TodoFilterActionTypes;
