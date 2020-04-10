import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todoReducer from "./todos/todoReducer";
import filterReducer from "./filter/filterReducer";

import { TodoActionTypes } from "./todos/todoType";
import { FilterActionTypes } from "./filter/filterType";
// import { getTodos } from "../services/todoService";
// import { saveState } from "../services/localStorage";

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

// const persistedState = async (): Promise<Todo[]> => {
//   const todos: Todo[] = await getTodos();
//   const initialState = { todos: todos };
//   return initialState;
// };

// const persistedState = {
//   todos: [],
// };

export const store = createStore(
  reducer,
  //  persistedState,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);

// Persists the todo data to local storage
// TODO: include lodas _throthle
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
// store.subscribe(() => {
//   saveState({
//     todos: store.getState().todos,
//   });
// });

export type AppState = ReturnType<typeof reducer>; // kokonaan recuerit - sourse of truth to app state

export type AppActions = TodoActionTypes | FilterActionTypes;
