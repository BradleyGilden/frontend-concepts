import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  // to monitor loading status
  const [isLoading, setIsLoading] = useState(true);
  // to monitor if error was returned
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Request returned with status ${response.status}`);
        }
        const jsonData = await response.json();
        setUser(jsonData);
        setIsLoading(false);
        // if error occured but then got fixed after a while, we need to set error status back to false
        setIsError(false);
        console.log(jsonData);
      } catch (err) {
        setIsError(true);
        console.log(err);
      }
    }
    fetchData();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error retrieving data...</h2>
  }
  // make sure to destructure after the multiple returns because user is still null up until this point
  const {name, company, avatar_url, bio} = user;
  return (
    <div>
      <img style={{width: '150px', borderRadius: '25px' }} src={avatar_url} alt='avatar'></img>
      <h2>{name}</h2>
      <h4>{company ? 'works at' + company : 'seeking employment'}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
