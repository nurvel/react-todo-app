export interface TodoFilter {
  showImportant: boolean;
  showDone: boolean;
}

export const SET_TODOFILTER = "SET_TODOFILTER";

export interface setTodoFilter {
  type: typeof SET_TODOFILTER;
  filter: TodoFilter;
}

export type TodoFilterActionTypes = setTodoFilter; // | setDone;
