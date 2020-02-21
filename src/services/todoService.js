import axios from "axios";

const url = "http://localhost:3001/todos";

export const getTodos = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const addTodo = async todoItem => {
  const response = await axios.post(url, todoItem);
  console.log(response);
};

// export default { getTodos };
