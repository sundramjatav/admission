import React from 'react'
import hero from '../../assets/courses/hero.svg'
const CoursesPage1 = () => {
    return (
        <div className='w-full lg:h-screen h-fit bg-[#CDE6EA] gap-5 flex flex-col-reverse lg:flex-row p-8'>
            <div className='w-full lg:w-1/2 h-full md:p-20 flex items-start justify-center flex-col'>
                <h1 className='md:text-7xl text-4xl font-semibold '>Top 20 Private </h1>
                <h1 className='md:text-7xl text-4xl font-semibold '>  Colleges In India</h1>
                <h1 className='md:text-7xl text-4xl font-semibold '> 2024, College </h1>
                <h1 className='md:text-7xl text-4xl font-semibold relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '> Lists , AIR, Seats.</h1>
                
                <button className="md:mt-8 inline-block items-center bg-[#E5C0B8] text-white md:text-3xl font-light text-sm md:py-3 md:px-20 px-5 py-1 mt-3 rounded-full md:rounded-2xl hover:bg-black">
                    Join Us <i class="ri-arrow-left-s-fill"></i>
                </button>
            </div>
            <div className='w-full lg:w-1/2 h-full lg:py-20 relative'>
                <img src={hero} className='w-full h-full object-contain' alt="" />

                {/* <div className='w-96 h-40 bg-red-100 absolute bottom-0 left-0' ></div> */}
            </div>
        </div>
    )
}

export default CoursesPage1