import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);


  return (
  <div>
    <h2>{ user ? 'Please Login' : 'Hello there, ' + user }</h2>
  </div>
  );
};

export default UserChallenge;
