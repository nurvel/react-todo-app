import todoService from "../../services/todoService";
import { Todo } from "./todoType";
import { AppActions, AppState } from "../index";
import { Dispatch } from "redux";

import { SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todoType";

export const setTodos = (todos: Todo[]): AppActions => ({
  type: SET_TODOS,
  todos
});

export const addTodo = (todo: Todo): AppActions => ({
  type: ADD_TODO,
  todo
});

export const deleteTodo = (todo: Todo): AppActions => ({
  type: DELETE_TODO,
  todo
});

export const updateTodo = (todo: Todo): AppActions => ({
  type: UPDATE_TODO,
  todo
});

// getState turha tässä, mutta esimerkkinä
export const loadTodos = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const todos: Todo[] = await todoService.getTodos();
    dispatch(setTodos(todos));
    // dispatch({
    //   type: LOAD_TODOS,
    //   todos: todos
    // })
  };
};

export const createNewTodo = (todo: Todo) => {
  return async (dispatch: Dispatch<AppActions>) => {
    const newTodo: Todo = await todoService.addTodo(todo);
    dispatch(addTodo(newTodo));
  };
};

export const removeTodo = (todo: Todo) => {
  return async (dispatch: Dispatch<AppActions>) => {
    await todoService.deleteTodo(todo);
    dispatch(deleteTodo(todo));
  };
};

// HOX: Alla kaksi tapaa update todo - Important ja Done
export const updateTodoDone = (todo: Todo) => {
  return async (dispatch: Dispatch<AppActions>) => {
    const updatedTodo: Todo = { ...todo, done: !todo.done };
    await todoService.updateTodo(updatedTodo);
    dispatch(updateTodo(updatedTodo));
  };
};

export const updateTodoImportant = (todo: Todo) => {
  return async (dispatch: Dispatch<AppActions>) => {
    const updatedTodo = { ...todo, important: !todo.important };
    await todoService.updateTodo(updatedTodo);
    dispatch(updateTodo(updatedTodo));
  };
};
