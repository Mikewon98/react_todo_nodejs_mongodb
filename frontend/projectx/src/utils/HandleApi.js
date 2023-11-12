import axios from "axios";

const baseUrl = "http://localhost:8080";

const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log(`data ${data}`);
      setToDo(data);
    })
    .catch((e) => console.log(e));
};

const addTodo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((e) => console.log(e));
};

const updateTodo = (text, setText, setToDo, toDoId, setIsUpdate) => {
  axios
    .post(`${baseUrl}/update`, { toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdate(false);
      getAllToDo(setToDo);
    })
    .catch((e) => console.log(e));
};

const deleteToDO = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((e) => console.log(e));
};

export { getAllToDo, addTodo, updateTodo, deleteToDO };
