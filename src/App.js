import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((curr) => curr + 1);

  const changeKeyword = (event) => setKeyword(event.target.value);

  useEffect(() => console.log("call api"), []);

  useEffect(() => console.log(`search for: ${keyword}`), [keyword]);
  // useEffect의 두 번째 인자인 의존성 배열에 변수를 할당하면, 변수의 값이 변화할 때마다 useEffect의 첫 번째 인자인 function이 호출된다.
  // 즉 특정한 변수의 값이 바뀔 때마다 원하는 함수를 호출시킬 수 있다.

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
