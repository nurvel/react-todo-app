import { TodoActionTypes } from "./todoActions";
import { TodoFilterActionTypes } from "./todoFilterActions";

export enum TypeKeys {
  // FILTER
  SET_TODOFILTER = "SET_TODOFILTER",
  TODO_FILTER_TOGGLE_IMPORTANT = "TODO_FILTER_TOGGLE_IMPORTANT",
  TODO_FILTER_TOGGLE_DONE = "TODO_FILTER_TOGGLE_DONE",
  // TODOS
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  LOAD_TODOS = "LOAD_TODOS",
  LOAD_TODOS_FULFILLED = "LOAD_TODOS_FULFILLED",
}
export * from "./todoActions";
export * from "./todoFilterActions";

export type AppActions = TodoFilterActionTypes | TodoActionTypes;
