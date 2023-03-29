import React from 'react'

const Plan = () => {
  return (
    /* left side */
    <div className='max-w-[1400px] m-auto py-6 px-4 grid lg:grid-cols-2 gap-4 '>
        <div className='grid grid-cols-2 grid-rows-6'>
              <img className='row-span-3 rounded-2xl object-cover-full h-full p-2 ' src="https://images.unsplash.com/photo-1679764754874-e27e9ce974fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
              <img className='row-span-2 rounded-2xl object-cover-full h-full p-2 ' src="https://images.unsplash.com/photo-1679487660558-272899b0701a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
              <img className='row-span-2 rounded-2xl object-cover-full h-full p-2 ' src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
              <img className='row-span-3 rounded-2xl object-cover-full h-full p-2 ' src="https://images.unsplash.com/photo-1676446547562-613597f00cf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
              <img className='row-span-2 rounded-2xl object-cover-full h-full p-2 ' src="https://plus.unsplash.com/premium_photo-1676444153063-310d0e992349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
        {/* right side */}
        <div className='flex flex-col px-6 h-full bg-gray-100 justify-center'>
            <h1 className='text-5xl md:text-6xl font-bold'>Plan for The Next trip</h1>
            <p className='text-2xl py-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit maiores doloribus eveniet deleniti, magnam dolorem sint blanditiis quod corrupti?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, adipisci?</p>
            <p className='pb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur dolore doloremque. Sit hic dolorum sapiente optio quis consectetur placeat!</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl '>Learn More</button>
                <button className='bg-black text-white mr-4 hover:shadow-xl '>Need More</button>
            </div>
        </div>
    </div>
  )
}

export default Plan