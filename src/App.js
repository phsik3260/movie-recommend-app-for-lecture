import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((curr) => curr + 1);

  const changeKeyword = (event) => setKeyword(event.target.value);

  console.log("I run all time.");

  useEffect(() => console.log("I run only once."), []);
  useEffect(() => {
    if (counter === 0) {
      return;
    }
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    if (keyword === "") {
      return;
    }
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    if (counter === 0 || keyword === "") {
      return;
    }
    console.log("I run when 'counter & keyword' changes.");
  }, [counter, keyword]);

  return (
    <>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
      <br />
      <br />
      <br />
      <div>
        <label htmlFor="">Movie Search</label>
        <input
          type="text"
          placeholder="Search here..."
          value={keyword}
          onChange={changeKeyword}
        />
      </div>
    </>
  );
};

export default App;
