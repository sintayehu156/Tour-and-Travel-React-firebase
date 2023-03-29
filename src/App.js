
// import React from 'react';
// import { Routes, Route, Navigate} from 'react-router-dom';
// import Signin from './pages/Signin.jsx';
// import Signup from './pages/Signup.jsx';
// import Account from './pages/Account.jsx';
// import Hero from './components/Hero.jsx';
// import { AuthContextProvider } from './Context/AuthContext.js';
// import ProtectedRoute from './components/ProtectedRoute.js';
// import Navbar from './components/Navbar.jsx';
// import Offers from './components/Offers.jsx';
// import Plan from './components/Plan.jsx';
// import Rooms from './components/Rooms.jsx';
// import ImageSlider from './components/ImageSlider.jsx';
// import Footer from './components/Footer.jsx';

// function BaseRoute() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Offers />
//       <Plan />
//       <Rooms />
//       <ImageSlider />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <AuthContextProvider>
//         <Routes>
//           <Route path="/" element={<BaseRoute />} />
//           <Route path="/signin" element={<BaseRoute><Signin /></BaseRoute>} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/account" element={<ProtectedRoute><BaseRoute><Account /></BaseRoute></ProtectedRoute>} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </AuthContextProvider>
//     </>
//   )
// }

// export default App


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

function BaseRoute() {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<BaseRoute />} />
          <Route path="/signin" element={<BaseRoute><Signin /></BaseRoute>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProtectedRoute><BaseRoute><Account /></BaseRoute></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
