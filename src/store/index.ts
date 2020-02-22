import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todoReducer from "./todos/todoReducer";
import filterReducer from "./filter/filterReducer";

import { TodoActionTypes } from "./todos/todoType";
import { FilterActionTypes } from "./filter/filterType";

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);

export type AppState = ReturnType<typeof reducer>; // kokonaan recuerit - sourse of truth to app state

export type AppActions = TodoActionTypes | FilterActionTypes;
