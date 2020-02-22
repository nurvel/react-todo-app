import { Todo, TodoActionTypes } from "./todoType";

const initialState: Todo[] = [];

const reducer = (state = initialState, action: TodoActionTypes): Todo[] => {
  switch (action.type) {
    case "SET_TODOS":
      return [...action.todos];
    case "ADD_TODO":
      return [...state, action.todo];
    case "UPDATE_TODO":
      return state.map(t => (t.id === action.todo.id ? action.todo : t));
    case "DELETE_TODO":
      return state.filter(t => t.id !== action.todo.id);
    default:
      return state;
  }
};

export default reducer;
