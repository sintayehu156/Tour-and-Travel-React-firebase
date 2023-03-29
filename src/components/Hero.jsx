import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='w-full top-0 left-0 h-screen object-cover' src="https://images.unsplash.com/photo-1679558916026-c5a87d6cd490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
            <div className='bg-black/25 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='max-w-6xl px-4 py-8 mx-auto text-center text-white'>
                    <p className='font-bold text-2xl py-2 '>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:7xl drop-shadow-2xl:'>Private Beaches and Getaway</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam neque animi, sed quia nam perspiciatis? Aliquid ipsam impedit molestiae.</p>
                    <button className='bg-white text-black hover:bg-gray-600 lg:hover:text-white mr-4 hover:shadow-xl '>Reserve Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
