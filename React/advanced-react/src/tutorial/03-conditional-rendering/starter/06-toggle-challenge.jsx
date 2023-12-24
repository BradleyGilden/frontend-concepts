import {useState} from 'react';

const ToggleChallenge = () => {

  const [morning, setMorning] = useState(true);

  return (
    {morning && <Greeting status={morning} />}
  );
};

const Greeting = () => {
  return (
    <
  );
}

export default ToggleChallenge;
