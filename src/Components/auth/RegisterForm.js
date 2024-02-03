import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterForm = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
     const auth = getAuth();
    alert("Your account has been succesfully created!");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      onRegisterSuccess(userCredential.user);
    } catch (error) {
      setError('Failed to register: ' + error.message);
    }
    
  };

  return (
    <div className='flex items-center justify-center mt-52'>
    <form onSubmit={RegisterForm} className='shadow-2xl bg-white flex flex-col gap-4 py-6 px-9' style={{ width: '450px' }}>
      <p className='font-semibold text-3xl'>SignUp</p>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='bg-slate-200 rounded-3xl py-2 pl-4 pr-44'
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-slate-200 rounded-3xl py-2 pl-4 pr-44'
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-slate-200 rounded-3xl py-2 pl-4 pr-44'
        />
      </div>
      {error && <p>{error}</p>}
      <div className='flex  justify-center'>
        
        <button type="submit" className='bg-blue-800 text-white rounded-2xl p-2'>Register</button>
      </div>
    </form>
  </div>
  );
};

export default RegisterForm;
