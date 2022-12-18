import React, { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [toy, setToy] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // send signup information to server or perform signup logic here
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type='number' value={age} onChange={(event) => setAge(event.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            City:
            <input type='text' value={city} onChange={(event) => setCity(event.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            State:
            <input type='text' value={state} onChange={(event) => setState(event.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Toy:
            <input type='text' value={toy} onChange={(event) => setToy(event.target.value)} required />
          </label>
        </div>
        <div>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;


