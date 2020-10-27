import { combineReducers } from "redux";

import todoReducer from "./todos/todoReducer";
import filterReducer from "./filter/todoFilterReducer";

import { TodoActionTypes } from "./todos/todoType";
import { TodoFilterActionTypes } from "./filter/todoFilterType";

export type AppState = ReturnType<typeof rootReducer>; // kokonaan recuerit - sourse of truth to app state

export type AppActions = TodoActionTypes | TodoFilterActionTypes;

export const rootReducer = combineReducers({
  todoState: todoReducer,
  filter: filterReducer,
});
