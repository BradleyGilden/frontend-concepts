import { useState } from 'react';

const ToggleChallenge = () => {

  const [user, setName] = useState({ name: 'john' });
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
      {user && <Greeting status={morning} name={user.name} message={message} toggleButton={toggleButton} />}
    </div>
  );
};

const Greeting = ({status, name, message, toggleButton }) => {
  return (
    <>
      { status ? (<h2>Good Morning {name}</h2>) : (<h2>Good Night {name}</h2>) }
      <button type='button' className='btn' style={{ margin: '1rem' }} onClick={toggleButton}>{ message }</button>
    </>
  );
}

export default ToggleChallenge;
