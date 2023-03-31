import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-800 text-gray-300 px-2 py-2 '>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-400 py-8 px-4'>
        <div> 
          <h6 className='font-bold uppercare pt-2' >Solutions</h6>
          <ul>
            <li className='py-1 lg:hover:text-blue-400'>Travel</li>
            <li className='py-1 lg:hover:text-blue-400'>Booking</li>
            <li className='py-1 lg:hover:text-blue-400'>Flights</li>
            <li className='py-1 lg:hover:text-blue-400'>Ground</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2' >Support</h6>
          <ul>
            <li className='py-1 lg:hover:text-blue-400'>Pricing</li>
            <li className='py-1 lg:hover:text-blue-400'>Documentation</li>
            <li className='py-1 lg:hover:text-blue-400'>Tours</li>
            <li className='py-1 lg:hover:text-blue-400'>Refunds</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2' >Company</h6>
          <ul>
            <li className='py-1 lg:hover:text-blue-400'>About</li>
            <li className='py-1 lg:hover:text-blue-400'>Blogs</li>
            <li className='py-1 lg:hover:text-blue-400'>Jobs</li>
            <li className='py-1 lg:hover:text-blue-400'>Press</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2' >Legals</h6>
          <ul>
            <li className='py-1 lg:hover:text-blue-400'>Claims</li>
            <li className='py-1 lg:hover:text-blue-400'>Privecy</li>
            <li className='py-1 lg:hover:text-blue-400'>Terms</li>
            <li className='py-1 lg:hover:text-blue-400'>Policies</li>
            <li className='py-1 lg:hover:text-blue-400'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our news letter</p>
          <p className='py-4'>The Latest deals, articles</p>
          <form className='lex flec-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4 hover:bg-gray-300 lg:hover:text-white ' type= "email" placeholder='Enter Email...' />
            <button className='p-2 mb-4 rounded-md mr-4 hover:shadow-xl lg:hover:text-white hover:bg-gray-600 '>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 ' >
        <p className='py-4 text-gray-300'>
        © 2023 TechEcthio IT Solution plc
        </p>
        <div className='flex justify-between sm:w-[300px] text-gray-300 pt-4 text-2xl'>
          <FaFacebook/>
          <FaInstagram/>
          <FaTwitter/>
          <TiSocialPinterest/>
        </div>
        </div>
    </div>
  )
}

export default Footer