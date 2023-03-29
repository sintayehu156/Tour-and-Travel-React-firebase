import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Signup = () => {
  const [showForm, setShowForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
    
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className='bg-black/50 fixed py-4 top-0 left-0 w-full h-screen'>
        <div className='fixed w-full px-4 py-24 z-50'>
          {
            showForm && (
        <div className='max-w-[450px] h-[600px] mx-auto px-12 rounded-2xl bg-gray-800 text-white'>
                <button onClick={handleToggleForm} className="flex text-center text-white focus:outline-none ">
                  X
                </button>
          <div className='max-w-[320px] max-auto py-16'>
            <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>

          </div>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='border p-3 rounded-2xl' placeholder='email'
                type='email'
              />
            </div>
            <div className='flex flex-col py-2'>
              <label className='py-2 font-medium'>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)} className='border p-3 rounded-2xl' placeholder='password' type='password'
              />
            </div>
            <button className='border border-blue-600 bg-blue-500 hover:bg-blue-500 w-full rounded-2xl p-4 my-2 text-white'>
              Sign Up
            </button>
              <p className="py-8">
                <span className='text-gray-400' >
                  Already have an account?
                </span>{''}
                <Link to='/signin'>Sign In</Link>
              </p>
          </form>
        </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Signup;