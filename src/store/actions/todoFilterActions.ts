import { AppActions, TypeKeys } from ".";
import { TodoFilterState } from "../reducers/todoFilterReducer";

export const setFilter = (filter: TodoFilterState): AppActions => ({
  type: TypeKeys.SET_TODOFILTER,
  filter,
});

export const toggleShowImportant = (): AppActions => {
  return {
    type: TypeKeys.TODO_FILTER_TOGGLE_IMPORTANT,
  };
};

export const toggleShowDone = (): AppActions => {
  return {
    type: TypeKeys.TODO_FILTER_TOGGLE_DONE,
  };
};

export interface setTodoFilter {
  type: typeof TypeKeys.SET_TODOFILTER;
  filter: TodoFilterState;
}

export interface toggleShowImportant {
  type: typeof TypeKeys.TODO_FILTER_TOGGLE_IMPORTANT;
}

export interface toggleShowDone {
  type: typeof TypeKeys.TODO_FILTER_TOGGLE_DONE;
}

export type TodoFilterActionTypes =
  | setTodoFilter
  | toggleShowImportant
  | toggleShowDone;
