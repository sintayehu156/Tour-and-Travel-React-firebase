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
    navigate('/')
  };

  return (
    <>
      <div className='bg-black/50 fixed py-4 top-0 left-0 w-full h-screen'>
        <div className='fixed w-full h-screen px-4 py-16 z-50'>
          {
            showForm && (
              <div className="max-w-[450px] h-[600px] mx-auto px-12 rounded-2xl bg-gray-800 text-white">
                <div className='max-w-[320px] max-auto py-16'>
                  <div className="flex justify-between">
                    <h1 className="text-2xl font-bold py-2">Sign in to your Account</h1>
                    <button onClick={handleToggleForm} className="text-white focus:outline-none ml-auto">
                      X
                    </button>
                  </div>
                </div>
                {error ? <p className="p-3">{error}</p> : null}
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col py-2">
                    <label className="py-2 font-mono">Email Address</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="border p-3 text-black rounded-2xl cursor-pointer hover:bg-gray-500 lg:hover:text-white"
                      placeholder="email address"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="border p-3 text-black rounded-2xl cursor-pointer hover:bg-gray-500 lg:hover:text-white"
                      placeholder="password"
                      type="password"
                    />
                  </div>
                  <button className="border hover: gray border-red-30 bg-blue-500 w-full rounded-2xl p-4 my-2 text-white cursor-pointer hover:bg-gray-500 lg:hover:text-white ">
                    Sign In
                  </button>
                  <div className="flex justify-between items-center">
                    <p className="py-8">
                      <span className="text-gray-400">You dont have an account yet? </span>
                      <Link to="/signup">Sign Up</Link>
                    </p>
                  </div>
                </form>

              </div>
            )}
        </div>
      </div>
    </>
  )
}
export default Signin

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { UserAuth } from '../Context/AuthContext';

// const Signin = () => {
//   const [showForm, setShowForm] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('')
//   const { Signin } = UserAuth();
//   const navigate = useNavigate()



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       await Signin(email, password);
//       navigate('/')
//     } catch (e) {
//       setError(e.message);
//       console.log(error);
//     }

//   };

//   const handleToggleForm = () => {
//     setShowForm(!showForm);
//     navigate('/')
//   };

//   return (
//     <>
//       <div className='bg-black/50 fixed py-4 top-0 left-0 w-full h-screen'>
//         <div className='fixed w-full h-screen px-4 py-16 z-50'>
//           {
//             showForm && (
//               <div className='max-w-[450px] h-[600px] mx-auto px-12 rounded-2xl bg-gray-800 text-white'>
//                 <div className='max-w-[320px] max-auto py-16'>
//                   <div className='flex justify-center'>
//                     <h1 className='text-2xl font-bold py-2'>Sign In To Your Account</h1>
//                     <button onClick={handleToggleForm} className='text-white focus:outline-none ml-auto cursor-pointer hover:bg-gray-500 lg:hover:text-white'>
//                       X
//                     </button>
//                   </div>
//                 </div>
//                 {error ? <p className='p-3'>{error}</p> : null}
//                 <form onSubmit={handleSubmit}>
//                   <div className="flex flex-col py-2">
//                     <label className="py-2 font-medium">Email Address</label>
//                     <input onChange={(e) => setEmail(e.target.value)} className="border p-3 text-black rounded-2xl cursor-pointer hover:bg-gray-500 lg:hover:text-white" placeholder='Email Address' type="email" />
//                   </div>
//                   <div className="flex flex-col py-2">
//                     <label className="py-2 font-medium" >Password</label>
//                     <input onChange={(e) => setPassword(e.target.value)} className="border p-3 text-black rounded-2xl cursor-pointer hover:bg-gray-500 lg:hover:text-white" placeholder='Password' type="password" />
//                   </div>
//                   <button className="border hover: gray border-red-30 bg-blue-500 w-full rounded-2xl p-4 my-2 text-white cursor-pointer hover:bg-gray-500 lg:hover:text-white ">Sign in</button>
//                   <div className='flex justify-between items-center'>
//                     <p className="py-8">
//                       <span className='text-gray-400'>
//                         You dont have an account Yet?
//                       </span>{''}
//                       <Link to='/signup'>Sign Up</Link>
//                     </p>
//                   </div>
//                 </form>
//               </div>

//             )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signin;