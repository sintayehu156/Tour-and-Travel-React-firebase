import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Signin = () => {
  const [showForm, setShowForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signin } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signin(email, password);
      navigate('/')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className='bg-black/50 fixed top-0 py-4 left-0 w-full h-screen'>
        <div className='fixed w-full px-4 py-24 z-50'>
       {
        showForm && (
       <div className="max-w-[450px] h-[600px] mx-auto px-12 rounded-2xl bg-gray-800 text-white">
                <button onClick={handleToggleForm} className="flex text-center text-white focus:outline-none ">
                  X
                </button>
            <div className='max-w-[320px] max-auto py-6'>
              <h1 className="text-2xl font-bold py-2">Signin to your acoount</h1>
    
        </div>
              <>
                {error ? <p className="p-3">{error}</p> : null}
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col py-2">
                    <label className="py-2 font-mono">Email Address</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="border p-3 rounded-2xl"
                      placeholder="email address"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="border p-3 rounded-2xl"
                      placeholder="password"
                      type="password"
                    />
                  </div>
                  <button className="border border-blue-500 bg-blue-500 w-full rounded-2xl p-4 my-2 text-white">
                    Sign In
                  </button>
                  <div className="flex justify-between items-center">
                    <p className="py-8">
                      <span className="text-gray-400">You dont have an account yet? </span>
                      <Link to="/signup">Sign Up</Link>
                    </p>
                  </div>
                </form>
              </>
        
      </div>
            )}
    </div>
      </div>
    </>
  )
}

export default Signin