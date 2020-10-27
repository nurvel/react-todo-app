import { Action } from "redux";
import { TypeKeys } from ".";
import { Todo } from "../reducers/todoReducer";

export const addTodo = (todo: Todo): TodoActionTypes => ({
  type: TypeKeys.ADD_TODO,
  todo,
});

export const removeTodo = (todo: Todo): TodoActionTypes => ({
  type: TypeKeys.DELETE_TODO,
  todo,
});

export const updateTodo = (todo: Todo): TodoActionTypes => ({
  type: TypeKeys.UPDATE_TODO,
  todo,
});

export const loadTodos = (): TodoActionTypes => ({
  type: TypeKeys.LOAD_TODOS,
});

// POC
// export const dummyTodo = (): TodoActionTypes => ({
//   type: TypeKeys.LOAD_TODOS_FULFILLED,
// });

export const loadTodosFulfilled = (todos: Todo[]): loadTodosFulfilled => ({
  type: TypeKeys.LOAD_TODOS_FULFILLED,
  todos : todos
});

export const createNewTodo = (todo: Todo) => ({
  type: TypeKeys.ADD_TODO,
  // return async (dispatch: Dispatch<AppActions>) => {
  //   const newTodo: Todo = await todoService.addTodo(todo);
  //   dispatch(addTodo(newTodo));
  // };
});

export interface AddTodoAction extends Action {
  type: typeof TypeKeys.ADD_TODO;
  todo: Todo;
}

export interface DeleteTodoAction extends Action {
  type: typeof TypeKeys.DELETE_TODO;
  todo: Todo;
}

export interface UpdateTodoAction extends Action {
  type: typeof TypeKeys.UPDATE_TODO;
  todo: Todo;
}

export interface LoadTodosAction extends Action {
  type: typeof TypeKeys.LOAD_TODOS;
}

export interface loadTodosFulfilled extends Action {
  type: typeof TypeKeys.LOAD_TODOS_FULFILLED;
  todos: Todo[];
}

// export interface DummyTodo extends Action {
//   type: typeof TypeKeys.LOAD_TODOS_FULFILLED;
// }

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | LoadTodosAction
  | loadTodosFulfilled;