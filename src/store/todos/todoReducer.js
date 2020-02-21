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

export default reducer;
