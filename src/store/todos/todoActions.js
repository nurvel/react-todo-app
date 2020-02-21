import todoService from "../../services/todoService";

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