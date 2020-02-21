import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todoReducer from "./todos/todoReducer";
import todoFilter from "./filter/filterReducer";

const reducer = combineReducers({
  todos: todoReducer,
  filter: todoFilter
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
