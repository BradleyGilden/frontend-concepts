import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    // another way of setting value
    setValue((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
    console.log(value);
  }
  return (
    <>
      <h1>{value}</h1>
      <button type='button' onClick={increaseValue} className='btn'>increase</button>
    </>
  );
};

export default UseStateGotcha;
