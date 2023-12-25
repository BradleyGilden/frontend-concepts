import { useState, useEffect } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');
  return (
  <div>
    <button type='button' className='btn' onClick={() => setToggle(!toggle)}>
      toggle component
    </button>
    {/* mounting and unmounting component */}
    {toggle && <RandomComponent />}
  </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const intId = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    return () => {
      clearInterval(intId);
      console.log('cleanup');
    };
  }, []);
  return <h1>hello there</h1>
}

export default CleanupFunction;
