// import { Action } from "redux";
// USE?:https://www.npmjs.com/package/typesafe-actions

import { TypeKeys } from ".";
import { Todo } from "../reducers/todoReducer";

export const addTodo = (todo: Todo): AddTodoAction => ({
  type: TypeKeys.ADD_TODO,
  todo,
});

export const removeTodo = (todo: Todo): DeleteTodoAction => ({
  type: TypeKeys.DELETE_TODO,
  todo,
});

export const updateTodo = (todo: Todo): UpdateTodoAction => ({
  type: TypeKeys.UPDATE_TODO,
  todo,
});

export const loadTodos = (): LoadTodosAction => ({
  type: TypeKeys.LOAD_TODOS,
});

export const loadTodosFulfilled = (
  todos: Todo[]
): LoadTodosFulfilledAction => ({
  type: TypeKeys.LOAD_TODOS_FULFILLED,
  todos: todos,
});

export const loadTodosFailed = (): LoadTodosFailedAction => ({
  type: TypeKeys.LOAD_TODOS_FAILED,
});

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

export interface LoadTodosFulfilledAction {
  type: typeof TypeKeys.LOAD_TODOS_FULFILLED;
  todos: Todo[];
}
export interface LoadTodosFailedAction {
  type: typeof TypeKeys.LOAD_TODOS_FAILED;
}

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | LoadTodosAction
  | LoadTodosFailedAction
  | LoadTodosFulfilledAction;
