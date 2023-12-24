import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {user && <SomeComponent name={user.name} />}
    </div>
  );
};

const SomeComponent = ({name}) => {
  return (
    <div>
      <h2>{name || 'default value'}</h2>
      {name && <div>
        <h2>whatever return</h2>
        <h2>{name}</h2>
      </div>}
    </div>
  );
}

export default ShortCircuitExamples;
