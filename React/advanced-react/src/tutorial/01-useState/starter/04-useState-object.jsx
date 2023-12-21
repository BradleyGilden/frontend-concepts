import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books'
  });
  const displayPerson = () => {
    setPerson ({
      name: 'peter',
      age: 28,
      hobby: 'scream at the computer'
    });
  };
  const {name, age, hobby} = person;
  return (
  <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h4>Enjoys : {hobby}</h4>
    <button className='btn' type='button' onClick={displayPerson}>Show peter</button>
  </>
  );
};

export default UseStateObject;
