import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((curr) => curr + 1);

  const changeKeyword = (event) => setKeyword(event.target.value);

  useEffect(() => console.log("call api"), []);

  useEffect(() => {
    if (keyword === "" || keyword.length < 3) {
      return;
    }
    // useEffect와 조건문을 결합하여 활용할 수도 있다.
    console.log(`search for: ${keyword}`);
  }, [keyword]);

  return (
    <>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
      <br />
      <br />
      <br />
      <div>
        <label htmlFor="">Movie Search</label>
        <input type="text" value={keyword} onChange={changeKeyword} />
      </div>
    </>
  );
};

export default App;
