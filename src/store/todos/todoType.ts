
export interface Todo {
  content: string;
  done: boolean;
  important: boolean;
  id?: number;
}
export enum TypeKeys {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  LOAD_TODOS = "LOAD_TODOS",
  LOAD_TODOS_FULFILLED = "LOAD_TODOS_FULFILLED",
}

export interface AddTodoAction {
  type: typeof TypeKeys.ADD_TODO;
  todo: Todo;
}

export interface DeleteTodoAction {
  type: typeof TypeKeys.DELETE_TODO;
  todo: Todo;
}

export interface UpdateTodoAction {
  type: typeof TypeKeys.UPDATE_TODO;
  todo: Todo;
}

export interface LoadTodosAction {
  type: typeof TypeKeys.LOAD_TODOS;
}

export interface loadTodosFulfilled {
  type: typeof TypeKeys.LOAD_TODOS_FULFILLED;
  todos: Todo[];
}

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | LoadTodosAction
  | loadTodosFulfilled;
