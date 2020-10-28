import { TodoActionTypes } from "./todoActions";
import { TodoFilterActionTypes } from "./todoFilterActions";

// USE?: https://www.npmjs.com/package/typesafe-actions
// https://stackoverflow.com/questions/53415353/react-redux-observable-typescript-compilation-argument-not-assignable-err/54306270#54306270
export enum TypeKeys {
  // FILTER
  SET_TODOFILTER = "SET_TODOFILTER",
  TODO_FILTER_TOGGLE_IMPORTANT = "TODO_FILTER_TOGGLE_IMPORTANT",
  TODO_FILTER_TOGGLE_DONE = "TODO_FILTER_TOGGLE_DONE",
  // TODOS
  ADD_TODO = "ADD_TODO",
  ADD_TODO_FULFILLED = "ADD_TODO_FULFILLED",
  ADD_TODO_FAILED = "ADD_TODO_FAILED",
  DELETE_TODO = "DELETE_TODO",
  DELETE_TODO_FULFILLED = "DELETE_TODO_FULFILLED",
  DELETE_TODO_FAILED = "DELETE_TODO_FAILED",
  UPDATE_TODO = "UPDATE_TODO",
  UPDATE_TODO_FULFILLED = "UPDATE_FULFILLED",
  UPDATE_TODO_FAILED = "UPDATE_FAILED",
  LOAD_TODOS = "LOAD_TODOS",
  LOAD_TODOS_FULFILLED = "LOAD_TODOS_FULFILLED",
  LOAD_TODOS_FAILED = "LOAD_TODOS_FAILED",
}


export * from "./todoActions";
export * from "./todoFilterActions";

export type AppActions = TodoFilterActionTypes | TodoActionTypes;
