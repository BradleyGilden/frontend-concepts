import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);


  return (
  <div>
    <h2>{ user ? 'Please Login' : 'Hello there, ' + user.name }</h2>
    <button type='button' className='button'  style={{ margin: '1rem 0' }}></button>
  </div>
  );
};

export default UserChallenge;
