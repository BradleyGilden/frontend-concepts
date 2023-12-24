import { useState } from 'react';

const ToggleChallenge = () => {

  const [name, setName] = useState('john');
  const [morning, setMorning] = useState(true);
  const [message, setMessage] = useState('change to night');

  const toggleButton = () => {
    if (morning) {
      setMorning(true);
      setMessage('change to night');
    } else {
      setMorning(false);
      setMessage('change to morning');
    }
  }

  return (
    <div>
      {name && <Greeting status={morning} name={name} message={message} />}
    </div>
  );
};

const Greeting = ({status, name}) => {
  return (
    <>
      { status ? (<h2>Good Morning {name}</h2>) : (<h2>Good Night {name}</h2>) }
      <button type='button' className='btn' style={{ margin: '1rem' }}>{ message }</button>
    </>
  );
}

export default ToggleChallenge;
