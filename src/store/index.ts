import { combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import filterReducer from "./reducers/todoFilterReducer";

export type AppState = ReturnType<typeof rootReducer>; // kokonaan recuerit - sourse of truth to app state

// export type AppActions = TodoActionTypes | TodoFilterActionTypes;

export const rootReducer = combineReducers({
  todoState: todoReducer,
  filter: filterReducer,
});
