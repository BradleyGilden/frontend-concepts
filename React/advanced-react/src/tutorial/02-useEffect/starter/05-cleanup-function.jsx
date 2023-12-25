import { useState, useEffect } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
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
    console.log('hmm, this is interesting');
    const intId = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    return () => {
      clearInterval(intId);
    };
  }, []);
  return <h1>hello there</h1>
}

export default CleanupFunction;
