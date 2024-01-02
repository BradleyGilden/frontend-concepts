import { useState } from 'react';
import { data } from '../../../data.js';

const UserChallenge = () => {
  const [isChecked, setIsChecked ] = useState(false);
  const [ name, setName ] = useState('');
  const [ users, setUsers ] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    let dataTemp = [...users];;
    if (!isChecked) {
      dataTemp.push({ id: Date.now(), name: name })
    } else {
      dataTemp = users.filter((item) => item.name !== name.toLowerCase() );
    }
    setUsers(dataTemp);
    console.log(dataTemp);
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e)=> {setName(e.target.value)} }/>
        </div>
        <div style={{ display: 'flex', gap: '2rem'}}>
          <label htmlFor='checker' className='form-label'>
            Delete?
          </label>
          <input style={{ width: '1.2rem'}} type='checkbox' id='checker' checked={isChecked} onChange={(e)=> {setIsChecked(e.target.checked)} }/>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map(({ id, name }) => {
        return <h4 key={id}>{name}</h4>
      })}
    </div>
  );
};
export default UserChallenge;
