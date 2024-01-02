import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // const handleChange = (e) => {
  //   if (e.target.id === 'name') {
  //     setName(e.target.value);
  //   } else if (e.target.id === 'email') {
  //     setEmail(e.target.value);
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(name, email);
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        {/* as state is updated so is the value displayed in the input */}
        <input type='text' className='form-input' id='name' value={name} onChange={ (e) => {setName(e.target.value)} } />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input type='email' className='form-input' id='email' value={email} onChange={ (e) => {setEmail(e.target.value)} } />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
