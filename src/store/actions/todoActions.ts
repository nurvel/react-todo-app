import todoService from "../../services/todoService";
import { Dispatch } from "redux";
import { AppActions, TypeKeys } from ".";
import { Todo } from "../reducers/todoReducer";

export const addTodo = (todo: Todo): AppActions => ({
  type: TypeKeys.ADD_TODO,
  todo,
});

export const removeTodo = (todo: Todo): AppActions => ({
  type: TypeKeys.DELETE_TODO,
  todo,
});

export const updateTodo = (todo: Todo): AppActions => ({
  type: TypeKeys.UPDATE_TODO,
  todo,
});

export const loadTodos = (): AppActions => ({
  type: TypeKeys.LOAD_TODOS,
});

// POC
export const dummyTodo = (): AppActions => ({
  type: TypeKeys.LOAD_TODOS_FULFILLED,
});

export const loadTodosFulfilled = (todos: Todo[]): AppActions => ({
  type: TypeKeys.LOAD_TODOS_FULFILLED,
  todos,
});

export const createNewTodo = (todo: Todo) => {
  return async (dispatch: Dispatch<AppActions>) => {
    const newTodo: Todo = await todoService.addTodo(todo);
    dispatch(addTodo(newTodo));
  };
};

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

export interface DummyTodo {
  type: typeof TypeKeys.LOAD_TODOS_FULFILLED;
}

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | LoadTodosAction
  | loadTodosFulfilled
  | DummyTodo;
