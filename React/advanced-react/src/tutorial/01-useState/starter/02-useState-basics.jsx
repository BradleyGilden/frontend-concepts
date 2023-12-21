import { useState } from "react";

const UseStateBasics = () => {
  // triggers rerendering
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
  <>
    <h4>{count}</h4>
    <button className="btn" type='button' onClick={handleClick}>Increase</button>
  </>
  );
}

export default UseStateBasics;
