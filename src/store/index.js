import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todoReducer from "./todos/todoReducer";
// import notificationReducer from './reducers/notificationReducer'
// import loginReducer from './reducers/loginReducer'
// import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  todos: todoReducer
  //   notification: notificationReducer,
  //   user: loginReducer,
  //   userlist: userReducer
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// export default store;
