import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () => setCounter((curr) => curr + 1);

  useEffect(() => console.log("call api"), []);
  // useEffect는 첫 번째 인자인 function이, 앱이 실행될 때 딱 한 번만 호출될 수 있도록 보호해주는 역할을 한다.
  // 즉 Component가 rerendering될 때 useEffect를 통해 특정 코드의 호출을 제한할 수 있다.

  return (
    <>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </>
  );
};

export default App;
