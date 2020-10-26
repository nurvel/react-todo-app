export interface TodoFilter {
  showImportant: boolean;
  showDone: boolean;
}

export enum TypeKeys {
  SET_TODOFILTER = "SET_TODOFILTER",
  TODO_FILTER_TOGGLE_IMPORTANT = "TODO_FILTER_TOGGLE_IMPORTANT",
  TODO_FILTER_TOGGLE_DONE = "TODO_FILTER_TOGGLE_DONE",
}

export interface setTodoFilter {
  type: typeof TypeKeys.SET_TODOFILTER;
  filter: TodoFilter;
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
