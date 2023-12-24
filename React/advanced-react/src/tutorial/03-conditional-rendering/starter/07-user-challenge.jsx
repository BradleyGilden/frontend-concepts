import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({ name: 'Bradley' })
    }
  }

  return (
  <div>
    { !user ? (
      <>
        <h2>Please Login</h2>
        <button type='button' className='btn'  style={{ margin: '1rem 0' }} onClick={handleLogin} >login</button>
      </>
      )
    : (
      <>
        <h2>Hello there, {user.name}</h2>
        <button type='button' className='btn'  style={{ margin: '1rem 0' }} onClick={handleLogin}>logout</button>
      </>
    ) }
  </div>
  );
};

export default UserChallenge;
