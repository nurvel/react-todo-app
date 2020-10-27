import { combineReducers } from "redux";
import todoReducer, { TodoState } from "./reducers/todoReducer";
import filterReducer, { TodoFilter } from "./reducers/todoFilterReducer";

// export type AppState = ReturnType<typeof rootReducer>; // kokonaan recuerit - sourse of truth to app state

export type AppState = {
  todoState: TodoState,
  filter: TodoFilter
}

export const rootReducer = combineReducers({
  todoState: todoReducer,
  filter: filterReducer,
});
