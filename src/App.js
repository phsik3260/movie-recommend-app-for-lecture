import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () => setCounter((curr) => curr + 1);

  console.log("call api");
  // setState를 통해 state의 값을 변경하면, 해당 Component 전체가 rerendering된다.
  // 따라서 위의 코드또한 rerendering되어 불필요하게 api를 다시 호출하게 된다.
  // App이 실행될 때 처음 한 번만 rendering되고, 이후에 (state의 값이 변경되더라도) rerendering되기를 원하지 않는 코드는 어떻게 처리할 수 있을까?

  return (
    <>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </>
  );
};

export default App;
