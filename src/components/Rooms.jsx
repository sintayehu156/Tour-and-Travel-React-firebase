import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20pt-6 lg:mb-[20%] md:mb-[35%] px-4 py-12 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-1'>
        <h3 className='text-2xl font-bold'>Fines Interior Rooms</h3>
        <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos id laudantium reprehenderit reiciendis iste.</p>
        </div>
        <div className='grid grid-cols-3 col-span-2 gap-4'>
              <img className='rounded-2xl object-cover w-full h-full ' src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
              <img className='rounded-2xl object-cover w-full h-full ' src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
              <img className='rounded-2xl object-cover w-full h-full ' src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60://plus.unsplash.com/premium_photo-1679541889443-ba2510728805?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
    </div>
  )
}

export default Rooms