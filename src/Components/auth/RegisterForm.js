import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Assuming onRegisterSuccess is a function, you can still call it here if needed
      if (onRegisterSuccess) onRegisterSuccess();
      navigate('/'); // Redirect to the product page (assuming it's the homepage)
    } catch (error) {
      setError('Failed to register: ' + error.message);
    }
  };

  return (
    <div className='flex items-center justify-center mt-52'>
      <form onSubmit={handleRegister} className='shadow-2xl bg-white flex flex-col gap-4 py-6 px-9' style={{ width: '450px' }}>
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
        {error && <p className='text-red-600'>{error}</p>}
        <div className='flex justify-center'>
          <button type="submit" className='bg-blue-800 text-white rounded-2xl p-2'>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
