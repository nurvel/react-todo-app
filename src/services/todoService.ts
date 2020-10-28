import axios from "axios";
import Axios from "axios-observable";
// import { Observable } from "rxjs";
import { Todo } from "../store/reducers/todoReducer";

const url: string = "http://localhost:3001/todos";

// Returns observable
export const getTodosObservable = () => {
  return Axios.get(url).subscribe(
    (response) => response.data,
    (error) => error
  );
};

export const getTodosPromise = (): Promise<Todo[]> => {
  return axios.get(url).then((response) => response.data);
  // Error is catched if Epics
  // .catch((err) => new Error(err));
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
  if (todo.id === undefined) throw Error("Todo has no id :/");
  const urlOfDelete = url + `/${todo.id}`;
  const response = await axios.delete(urlOfDelete);
  console.log(response);
};

export default { addTodo, updateTodo, deleteTodo };
