import React, { useState, useEffect } from "react";

const App = () => {
  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing((curr) => !curr);

  return (
    <>
      {showing && <Hello />}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </>
  );
};
const Hello = () => {
  useEffect(() => {
    console.log("I'm here!");
    return () => console.log("destroyed!"); // cleanUp function: 해당 Component가 destroy될 때 호출된다.
  }, []);

  return <h1>Hello</h1>;
};

export default App;
