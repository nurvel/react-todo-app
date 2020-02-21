import todoService from "../../services/todoService";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TODOS":
      return action.data;
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

export default reducer;
