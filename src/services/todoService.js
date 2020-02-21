import axios from "axios";

const url = "http://localhost:3001/todos";

export const getTodos = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const addTodo = async todoItem => {
  const response = await axios.post(url, todoItem);
  console.log(response);
  return response.data;
};

export const updateTodo = async todoToChange => {
  const urlOfUpdate = url + `/${todoToChange.id}`;
  const response = await axios.put(urlOfUpdate, todoToChange);
  console.log(response);
};

export const deleteTodo = async id => {
  const urlOfDelete = url + `/${id}`;
  const response = await axios.delete(urlOfDelete);
  console.log(response);
};

export default { getTodos, addTodo, updateTodo, deleteTodo };
