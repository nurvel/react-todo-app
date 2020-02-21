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

export const toggleShowImportant = filter => {
  return dispatch => {
    const newFilter = {
      ...filter,
      showImportant: !filter.showImportant
    };
    dispatch({
      type: "SET_FILTER",
      data: newFilter
    });
  };
};

export const toggleShowDone = filter => {
    return dispatch => {
      const newFilter = {
        ...filter,
        showDone: !filter.showDone
      };
      dispatch({
        type: "SET_FILTER",
        data: newFilter
      });
    };
  };

export default reducer;
