import axios from "axios";
import { Todo } from "../store/reducers/todoReducer";

const url: string = "http://localhost:3001/todos";

export const getTodos = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const addTodo = async (todoItem: Todo) => {
  const response = await axios.post(url, todoItem);
  console.log(response);
  return response.data;
};

export const updateTodo = async (todoToChange: Todo) => {
  const urlOfUpdate = url + `/${todoToChange.id}`;
  const response = await axios.put(urlOfUpdate, todoToChange);
  console.log(response);
};

export const deleteTodo = async (todo: Todo) => {
  if (todo.id === undefined) throw "Todo has no id :/";
  const urlOfDelete = url + `/${todo.id}`;
  const response = await axios.delete(urlOfDelete);
  console.log(response);
};

export default { getTodos, addTodo, updateTodo, deleteTodo };
