import todoService from "../../services/todoService";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TODOS":
      return action.data;
    case "ADD_TODO":
      return [...state, action.data];
    case "UPDATE_TODO":
      return state.map(t => (t.id === action.data.id ? action.data : t));
    case "DELETE_TODO":
      return state.filter(t => t.id !== action.data.id);
    default:
      return state;
  }
};

export const loadTodos = () => {
  return async dispatch => {
    const todos = await todoService.getTodos();
    dispatch({
      type: "LOAD_TODOS",
      data: todos
    });
  };
};

export const createNewTodo = todo => {
  return async dispatch => {
    const newTodo = await todoService.addTodo(todo);
    dispatch({
      type: "ADD_TODO",
      data: newTodo
    });
  };
};

export const deleteTodo = todo => {
  return async dispatch => {
    await todoService.deleteTodo(todo.id);
    dispatch({
      type: "DELETE_TODO",
      data: todo
    });
  };
};

export const updateTodoDone = todo => {
  return async dispatch => {
    const updatedTodo = { ...todo, done: !todo.done };
    await todoService.updateTodo(updatedTodo);
    dispatch({
      type: "UPDATE_TODO",
      data: updatedTodo
    });
  };
};

export const updateTodoImportant = todo => {
  return async dispatch => {
    const updatedTodo = { ...todo, important: !todo.important };
    await todoService.updateTodo(updatedTodo);
    dispatch({
      type: "UPDATE_TODO",
      data: updatedTodo
    });
  };
};

export default reducer;
