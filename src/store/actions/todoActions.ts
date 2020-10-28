// USE?:https://www.npmjs.com/package/typesafe-actions

import { Action } from "redux";
import { TypeKeys } from ".";
import { Todo } from "../reducers/todoReducer";

export const addTodo = (todo: Todo): AddTodoAction => ({
  type: TypeKeys.ADD_TODO,
  todo,
});

export const addTodoFailed = (todo: Todo): AddTodoActionFailed => ({
  type: TypeKeys.ADD_TODO_FAILED,
});

export const addTodoFulfilled = (todo: Todo): AddTodoActionFulfilled => ({
  type: TypeKeys.ADD_TODO_FULFILLED,
  todo,
});

export const removeTodo = (todo: Todo): DeleteTodoAction => ({
  type: TypeKeys.DELETE_TODO,
  todo,
});

export const removeTodoFailed = (todo: Todo): DeleteTodoActionFailed => ({
  type: TypeKeys.DELETE_TODO_FAILED,
  todo,
});

export const removeTodoFulfilled = (todo: Todo): DeleteTodoActionFulfilled => ({
  type: TypeKeys.DELETE_TODO_FULFILLED,
  todo,
});

export const updateTodo = (todo: Todo): UpdateTodoAction => ({
  type: TypeKeys.UPDATE_TODO,
  todo,
});

export const updateTodoFailed = (todo: Todo): UpdateTodoActionFailed => ({
  type: TypeKeys.UPDATE_TODO_FAILED,
  todo,
});

export const updateTodoFulfilled = (todo: Todo): UpdateTodoActionFulfilled => ({
  type: TypeKeys.UPDATE_TODO_FULFILLED,
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

export interface AddTodoAction extends Action {
  type: typeof TypeKeys.ADD_TODO;
  todo: Todo;
}

export interface AddTodoActionFulfilled extends Action {
  type: typeof TypeKeys.ADD_TODO_FULFILLED;
  todo: Todo;
}

export interface AddTodoActionFailed extends Action {
  type: typeof TypeKeys.ADD_TODO_FAILED;
}

export interface DeleteTodoAction extends Action {
  type: typeof TypeKeys.DELETE_TODO;
  todo: Todo;
}

export interface DeleteTodoActionFulfilled extends Action {
  type: typeof TypeKeys.DELETE_TODO_FULFILLED;
  todo: Todo;
}

export interface DeleteTodoActionFailed extends Action {
  type: typeof TypeKeys.DELETE_TODO_FAILED;
  todo: Todo;
}

export interface UpdateTodoAction extends Action {
  type: typeof TypeKeys.UPDATE_TODO;
  todo: Todo;
}

export interface UpdateTodoActionFulfilled extends Action {
  type: typeof TypeKeys.UPDATE_TODO_FULFILLED;
  todo: Todo;
}

export interface UpdateTodoActionFailed extends Action {
  type: typeof TypeKeys.UPDATE_TODO_FAILED;
  todo: Todo;
}

export interface LoadTodosAction extends Action {
  type: typeof TypeKeys.LOAD_TODOS;
}

export interface LoadTodosFulfilledAction extends Action {
  type: typeof TypeKeys.LOAD_TODOS_FULFILLED;
  todos: Todo[];
}
export interface LoadTodosFailedAction extends Action {
  type: typeof TypeKeys.LOAD_TODOS_FAILED;
}

export type TodoActionTypes =
  | AddTodoAction
  | AddTodoActionFulfilled
  | AddTodoActionFailed
  | DeleteTodoAction
  | DeleteTodoActionFulfilled
  | DeleteTodoActionFailed
  | UpdateTodoAction
  | UpdateTodoActionFulfilled
  | UpdateTodoActionFailed
  | LoadTodosAction
  | LoadTodosFailedAction
  | LoadTodosFulfilledAction;
