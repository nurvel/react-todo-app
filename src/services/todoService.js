import axios from "axios";

const url = "http://localhost:3001/todos";

export const getTodos = async () => {
  const response = await axios.get(url);
  return response.data;
};

// export default { getTodos };
