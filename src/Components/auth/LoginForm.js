import React, { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase'
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/userContext'; 
const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();
  
  const handleLogin = async (event) => {
    event.preventDefault();
    setUser({ email });
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Assuming onRegisterSuccess is a function, you can still call it here if needed
      if (onLoginSuccess) onLoginSuccess();
      navigate('/'); // Redirect to the product page (assuming it's the homepage)
    } catch (error) {
      setError('Failed to register: ' + error.message);
    }
  };

  return (
    <div className='flex items-center justify-center mt-52'>
      <form onSubmit={handleLogin} className='shadow-2xl bg-white flex flex-col gap-4 py-6 px-9' style={{ width: '450px' }}>
        <p className='font-semibold text-3xl'>Login</p>
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
        <div className='flex justify-between gap-6 items-center'>
          <Link to='/register' className='text-blue-500 hover:underline underline-blue-500 underline-offset-1'>New user? Create an account</Link>
          <button type="submit" className='bg-blue-800 text-white rounded-2xl p-2'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
