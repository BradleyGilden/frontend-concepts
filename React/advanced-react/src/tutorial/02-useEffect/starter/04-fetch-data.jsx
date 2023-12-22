/**
 * Side effects should be separated from the rendering process.
 * If we need to perform a side effect, it should strictly be done after our component renders.
 * therefore useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.
 */

import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    }
    fetchData();
  }, [])
  return (
  <>
    <h3>Github Users</h3>
    <ul className="users">
      {users.map((user) => {
        console.log(user);
        return (
        <li key={user.id}>
          <img src={user.avatar_url} alt="icon" />
          <div>
            <h5>{user.login}</h5>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">profile</a>
          </div>
        </li>
        );
      })}
    </ul>
  </>
  );
};
export default FetchData;
