const initialState = {
  showImportant: true,
  showDone: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.data;
    default:
      return state;
  }
};

export default reducer;
