import React, { useState, useEffect } from "react";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    console.log(toDo);
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(""); // state의 값은 반드시 setState()를 통해 변경되어야 한다.
  };

  useEffect(() => console.log(toDos), [toDos]);

  return (
    <>
      <h1>My Todos: {toDos.length}</h1>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write a to do..."
          value={toDo}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default App;
