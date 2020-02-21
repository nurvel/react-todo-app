import todoService from "../../services/todoService";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TODOS":
      return action.data;
    case "UPDATE_TODO":
      return state.map(t => (t.id === action.data.id ? action.data : t));
    default:
      return state;
  }
};

export const loadTodos = () => {
  return async dispatch => {
    const blogs = await todoService.getTodos();
    dispatch({
      type: "LOAD_TODOS",
      data: blogs
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

export default reducer;
