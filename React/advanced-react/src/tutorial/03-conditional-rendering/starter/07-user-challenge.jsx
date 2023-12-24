import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);


  return (
  <div>
    { user ? (
      <h2>Please Login</h2>
      <button type='button' className='button'  style={{ margin: '1rem 0' }}>login</button>
      )
    : ('Hello there, ' + user.name) }
  </div>
  );
};

export default UserChallenge;
