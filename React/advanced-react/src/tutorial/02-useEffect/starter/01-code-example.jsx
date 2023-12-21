import { useState, useEffect } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  // by default it runs on every render
  // if empty array is provided, only runs on initial render
  useEffect(() => {
    console.log('hello from use effect');
  }, []);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
