import {useState} from 'react';

const ToggleChallenge = () => {

  const [morning, setMorning] = useState(true);

  return (
    {morning && <Greeting  />}
  );
};

const Greeting = () => {

}

export default ToggleChallenge;
