import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = () => {
    const slides = [
        {
            url: 'https://plus.unsplash.com/premium_photo-1679541889389-c75e5b8ab97b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: 'Image1',
        },
        {
            url: 'https://images.unsplash.com/photo-1679766826593-738e9b6338c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            title: 'Image2',
        },
        {
            url: 'https://images.unsplash.com/photo-1679211589494-fdf0dad79e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: 'Image3',
        },
        {
            url: 'https://images.unsplash.com/photo-1679673177212-8a011a4f86f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: 'Image1',
        },
        {
            url: 'https://images.unsplash.com/photo-1679702173887-351a81433cdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            title: 'Image2',
        },
        {
            url: 'https://images.unsplash.com/photo-1678047441857-15edea529311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
            title: 'Image3',
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => { 
        const isFirstSlide = currentIndex ===0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => { 
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='max-w-[1400px] h-[700px] w-full m-auto px-4 relative group'>
            <div
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500' 
                style={{backgroundImage: `url(${slides[currentIndex].url})` }}
                ></div>
            {/* left Arrows */}
            <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide}/>
            </div>
            {/* Right Arrows */}
            <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide}/>
            </div>

            <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick = {() => goToSlide(slideIndex)} >
                    <RxDotFilled />
                </div>

            ))}
            </div>
        </div>
    )
}

export default ImageSlider