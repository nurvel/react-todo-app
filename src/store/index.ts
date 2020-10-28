import { combineReducers } from "redux";
import todoReducer, { TodoState } from "./reducers/todoReducer";
import filterReducer, { TodoFilterState } from "./reducers/todoFilterReducer";
// import * as actions from "./actions"

// export type AppStateS = ReturnType<typeof rootReducer>; // kokonaan recuerit - sourse of truth to app state
// export const AppActions = ReturnType<typeof actions>

export type AppState = {
  todoState: TodoState,
  filter: TodoFilterState
}

export const rootReducer = combineReducers({
  todoState: todoReducer,
  filter: filterReducer,
});
