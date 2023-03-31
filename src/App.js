
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Account from './pages/Account.jsx';
import Hero from './components/Hero.jsx';
import { AuthContextProvider } from './Context/AuthContext.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import Navbar from './components/Navbar.jsx';
import Offers from './components/Offers.jsx';
import Plan from './components/Plan.jsx';
import Rooms from './components/Rooms.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Hero />
        <Offers />
        <Plan />
        <Rooms />
        <ImageSlider />
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/hero' element={<Hero />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/imageslider' element={<ImageSlider />} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  )
}

export default App
