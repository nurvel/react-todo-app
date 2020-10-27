import { TypeKeys } from "../actions";
import { TodoActionTypes } from "../actions/todoActions";

export interface Todo {
  content: string;
  done: boolean;
  important: boolean;
  id?: number;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const reducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case TypeKeys.LOAD_TODOS:
      return { ...state };
    case TypeKeys.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case TypeKeys.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((t: Todo) =>
          t.id === action.todo.id ? action.todo : t
        ),
      };
    case TypeKeys.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.todo.id),
      };
    default:
      return state;
  }
};

export default reducer;
