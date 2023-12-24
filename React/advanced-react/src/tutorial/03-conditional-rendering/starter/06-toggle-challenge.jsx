import {useState} from 'react';

const ToggleChallenge = () => {

  const [name, setName] = useState('john');
  const [morning, setMorning] = useState(true);

  return (
    {name && <Greeting status={morning} name={name} />}
  );
};

const Greeting = ({status, name}) => {
  return (
    {status ? (<h2>Good Morning {name}</h2>) : (<h2>Good Night {name}</h2>)}
  );
}

export default ToggleChallenge;
