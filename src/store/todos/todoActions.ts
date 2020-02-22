import todoService from "../../services/todoService";
import { Todo } from "./todoType";
import { AppActions, AppState } from "../index";
import { Dispatch } from "redux";

import { SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todoType";

export const setTodos = (todos: Todo[]): AppActions => ({
  type: SET_TODOS,
  todos
});

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
  return async dispatch => {
    const newTodo = await todoService.addTodo(todo);
    dispatch({
      type: "ADD_TODO",
      data: newTodo
    });
  };
};

export const deleteTodo = (todo: Todo) => {
  return async dispatch => {
    await todoService.deleteTodo(todo.id);
    dispatch({
      type: "DELETE_TODO",
      data: todo
    });
  };
};

export const updateTodoDone = (todo: Todo) => {
  return async dispatch => {
    const updatedTodo = { ...todo, done: !todo.done };
    await todoService.updateTodo(updatedTodo);
    dispatch({
      type: "UPDATE_TODO",
      data: updatedTodo
    });
  };
};

export const updateTodoImportant = (todo: Todo) => {
  return async dispatch => {
    const updatedTodo = { ...todo, important: !todo.important };
    await todoService.updateTodo(updatedTodo);
    dispatch({
      type: "UPDATE_TODO",
      data: updatedTodo
    });
  };
};
