import axios from "axios";
import { Todo } from "../store/todos/todoType";

const URL: string = "http://localhost:3001/todos";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(URL);
  return response.data;
};

export const addTodo = async (todoItem: Todo) => {
  const response = await axios.post(URL, todoItem);
  console.log(response);
  return response.data;
};

export const updateTodo = async (todoToChange: Todo) => {
  const urlOfUpdate = URL + `/${todoToChange.id}`;
  const response = await axios.put(urlOfUpdate, todoToChange);
  console.log(response);
};

export const deleteTodo = async (todo: Todo) => {
  if (todo.id === undefined) throw new Error("Todo has no id :/");
  const urlOfDelete = URL + `/${todo.id}`;
  const response = await axios.delete(urlOfDelete);
  console.log(response);
};

export default { getTodos, addTodo, updateTodo, deleteTodo };
