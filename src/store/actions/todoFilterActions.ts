import { Action } from "redux";
import { TypeKeys } from ".";
import { TodoFilterState } from "../reducers/todoFilterReducer";

export const setFilter = (filter: TodoFilterState): setTodoFilter => ({
  type: TypeKeys.SET_TODOFILTER,
  filter,
});

export const toggleShowImportant = (): toggleShowImportant => {
  return {
    type: TypeKeys.TODO_FILTER_TOGGLE_IMPORTANT,
  };
};

export const toggleShowDone = (): toggleShowDone => {
  return {
    type: TypeKeys.TODO_FILTER_TOGGLE_DONE,
  };
};

export interface setTodoFilter extends Action {
  type: typeof TypeKeys.SET_TODOFILTER;
  filter: TodoFilterState;
}

export interface toggleShowImportant extends Action {
  type: typeof TypeKeys.TODO_FILTER_TOGGLE_IMPORTANT;
}

export interface toggleShowDone extends Action {
  type: typeof TypeKeys.TODO_FILTER_TOGGLE_DONE;
}

export type TodoFilterActionTypes =
  | setTodoFilter
  | toggleShowImportant
  | toggleShowDone;
