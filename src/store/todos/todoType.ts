export interface Todo {
  content: string;
  done: boolean;
  important: boolean;
  id?: number;
}

export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export interface SetTodoAction {
  type: typeof SET_TODOS;
  todos: Todo[];
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  todo: Todo;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  todo: Todo;
}

export interface UpdateTodoAction {
  type: typeof UPDATE_TODO;
  todo: Todo;
}

export type TodoActionTypes =
  | SetTodoAction
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction;
