
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