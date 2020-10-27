import todoService from "../../services/todoService";
import { DummyTodo, Todo, TypeKeys } from "./todoType";
import { AppActions } from "../index";
import { Dispatch } from "redux";

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
