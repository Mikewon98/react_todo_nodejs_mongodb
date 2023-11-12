import React, { useEffect, useState } from "react";
import Todo from "./components/todo";
import { getAllToDo, addTodo, updateTodo, deleteToDO } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Add Todo...'
          />
          <div
            className='add'
            onClick={
              isUpdate
                ? () => updateTodo(text, setToDo, setText, setIsUpdate, toDoId)
                : () => addTodo(text, setText, setToDo)
            }
          >
            {isUpdate ? "Update" : "Add"}
          </div>
        </div>
        <div className='List'>
          {toDo.map((item) => (
            <Todo
              updateMode={() => updateMode(item._id, item.text)}
              key={item._id}
              text={item.text}
              deleteToDO={() => deleteToDO(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
