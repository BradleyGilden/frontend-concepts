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

// const RandomComponent = () => {
//   useEffect(() => {
//     const intId = setInterval(() => {
//       console.log('hello from interval');
//     }, 1000);
//     return () => {
//       {/* This runs when component is unmounted ( the cleanup ) */}
//       clearInterval(intId);
//       console.log('cleanup');
//     };
//   }, []);
//   return <h1>hello there</h1>
// }

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // code here
    }
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, []);
  return <h1>hello there</h1>
}


export default CleanupFunction;
