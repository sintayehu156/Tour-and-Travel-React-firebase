
import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    };

    const handleLinkClick = () => {
        setNav(false);
        document.body.style.overflow = 'scroll';
    };

    return (
        <nav className='fixed w-full top-0 left-0 p-2 flex justify-between items-center bg-white shadow-md z-50'>
            <Link to='/'>
                <img className='transition-all duration-300 h-6 w-12 md:h-16 md:w-16' src="tour.png" alt="Logo" />
            </Link>

            <div className='flex items-center'>
                <button className='text-gray-600 focus:outline-none lg:hidden' onClick={handleNav}>
                    <HiMenuAlt3 className='w-6 h-6' />
                </button>

                <ul
                    className={`${nav ? '' : 'hidden'} absolute top-full left-0 lg:relative lg:flex lg:items-center lg:ml-4 lg:mt-0 lg:text-sm lg:font-medium space-x-4`} >
                    <li>
                        <Link
                            to='/' className='block py-2 pl-3 pr-4 text-gray-800 text-xl lg:bg-transparent lg:text-gray-700 lg:p-0 lg:hover:text-blue-400'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/hero' className='block py-2 pl-3 pr-4 text-gray-800 text-xl lg:bg-transparent lg:text-gray-700  lg:p-0 lg:hover:text-blue-400'
                        >
                            Destinations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/offers' className='block py-2 pl-3 pr-4 text-gray-800 text-xl lg:bg-transparent lg:text-gray-700  lg:p-0 lg:hover:text-blue-400'
                        >
                            Reservations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/plan' className='block py-2 pl-3 pr-4 text-gray-800 text-xl lg:bg-transparent lg:text-gray-700  lg:p-0 lg:hover:text-blue-400'
                        >
                            Plan
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/rooms' className='block py-2 pl-3 pr-4 text-gray-800 text-xl lg:bg-transparent lg:text-gray-700  lg:p-0 lg:hover:text-blue-400'
                        >
                            Rooms
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/signin' onClick={() => {
                                handleLinkClick();
                                document.body.style.overflow = '';
                            }}
                        >
                            <button className='bg-blue-400 text-black pr-4 cursor-pointer hover:bg-gray-600 lg:hover:text-white'>
                                Sign In
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

