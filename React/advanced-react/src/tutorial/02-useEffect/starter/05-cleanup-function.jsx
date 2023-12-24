import { useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
  <div>
    <button type='button' className='btn' onClick={() => setToggle(!toggle)}>
      toggle component
    </button>
  </div>
  );
};

export default CleanupFunction;
