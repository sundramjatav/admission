import React from 'react'
import image1 from '../../assets/services/image1.jpeg'
import image2 from '../../assets/services/image2.jpeg'
import image3 from '../../assets/services/image3.jpeg'
import image4 from '../../assets/services/image4.jpeg'
import image1svg from '../../assets/services/image1.svg'
import image2svg from '../../assets/services/image2.svg'
import image3svg from '../../assets/services/image3.svg'
import image4svg from '../../assets/services/image4.svg'
const ServicesPage2 = () => {
  return (
    <div className='w-full h-fit bg-[#F4E9E3] mt-24 p-8 py-12'>
        <h1 className='md:text-7xl leading-none text-3xl hidden md:block font-bold text-center  text-black relative'><span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Our Services Consultancy Services</span></h1>
        <h1 className='md:text-[5.2rem] md:hidden leading-none text-3xl font-bold text-center  px-10 text-black relative'>Our Services <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '> Consultancy Services</span></h1>
        <div className='w-full grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 md:px-10 mt-12'>
            <div className='w-full h-fit shadow-md rounded-lg overflow-hidden bg-[#CFE9ED]'>
                <div className='w-full h-44 bg-red-200 relative'>
                    <img src={image1} className='w-full h-full object-cover object-top' alt="" />
                    <div className='w-full h-full bg-[#ffffff4b] absolute top-0'></div>
                </div>
                <div className='md:p-8 p-4'>
                    <div className='flex gap-5 items-center '>
                        <img src={image1svg} className='md:w-20 md:h-24 w-16' alt="" />
                        <h1 className=' md:text-4xl text-2xl font-semibold'>Course Selection</h1>
                    </div>
                    <div className='py-5 md:text-2xl text-xl'>
                        <p>
                        Choosing the right course and institution is a pivotal decision in your educational journey. Our counselors take the time to understand your academic background, interests, and long-term career goals. Based on this information, we provide personalized recommendations that align with your aspirations, ensuring you make an informed choice that will set you on the path to success.
                        </p>
                    </div>

                    <div className='w-full flex justify-end items-center'>
                        <button className='px-10 bg-white py-2 text-xl hover:bg-[#84DDDC] hover:text-white rounded-full flex items-center gap-2 font-semibold'>Read More <i class="ri-arrow-right-line text-xl"></i></button>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit shadow-md rounded-lg overflow-hidden bg-[#C3AAB0]'>
            <div className='w-full h-44 bg-red-200 relative'>
                    <img src={image2} className='w-full h-full object-cover object-top' alt="" />
                    <div className='w-full h-full bg-[#ffffff4b] absolute top-0'></div>
                </div>
                <div className='md:p-8 p-4'>
                    <div className='flex gap-5 items-center '>
                        <img src={image2svg} className='md:w-20 md:h-24 w-16' alt="" />
                        <h1 className=' md:text-4xl text-2xl font-semibold'>Application Process Guidance</h1>
                    </div>
                    <div className='py-5 md:text-2xl text-xl'>
                        <p>
                        Choosing the right course and institution is a pivotal decision in your educational journey. Our counselors take the time to understand your academic background, interests, and long-term career goals. Based on this information, we provide personalized recommendations that align with your aspirations, ensuring you make an informed choice that will set you on the path to success.
                        </p>
                    </div>

                    <div className='w-full flex justify-end items-center'>
                        <button className='px-10 bg-white py-2 text-xl hover:bg-[#84DDDC] hover:text-white rounded-full flex items-center gap-2 font-semibold'>Read More <i class="ri-arrow-right-line text-xl"></i></button>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit shadow-md rounded-lg overflow-hidden bg-[#E5C0B8]'>
            <div className='w-full h-44 bg-red-200 relative'>
                    <img src={image3} className='w-full h-full object-cover object-top' alt="" />
                    <div className='w-full h-full bg-[#ffffff4b] absolute top-0'></div>
                </div>
                <div className='md:p-8 p-4'>
                    <div className='flex gap-5 items-center '>
                        <img src={image3svg} className='md:w-20 md:h-24 w-16' alt="" />
                        <h1 className=' md:text-4xl text-2xl font-semibold'>Entrance Exam Preparation Assistance</h1>
                    </div>
                    <div className='py-5 md:text-2xl text-xl'>
                        <p>
                        Choosing the right course and institution is a pivotal decision in your educational journey. Our counselors take the time to understand your academic background, interests, and long-term career goals. Based on this information, we provide personalized recommendations that align with your aspirations, ensuring you make an informed choice that will set you on the path to success.
                        </p>
                    </div>

                    <div className='w-full flex justify-end items-center'>
                        <button className='px-10 bg-white py-2 text-xl hover:bg-[#84DDDC] hover:text-white rounded-full flex items-center gap-2 font-semibold'>Read More <i class="ri-arrow-right-line text-xl"></i></button>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit shadow-md rounded-lg overflow-hidden bg-[##F4E9E3]'>
            <div className='w-full h-44 bg-red-200 relative'>
                    <img src={image4} className='w-full h-full object-cover object-top' alt="" />
                    <div className='w-full h-full bg-[#ffffff4b] absolute top-0'></div>
                </div>
                <div className='md:p-8 p-4'>
                    <div className='flex gap-5 items-center '>
                        <img src={image4svg} className='md:w-20 md:h-24 w-16' alt="" />
                        <h1 className=' md:text-4xl text-2xl font-semibold'>Counseling Sessions</h1>
                    </div>
                    <div className='py-5 md:text-2xl text-xl'>
                        <p>
                        Choosing the right course and institution is a pivotal decision in your educational journey. Our counselors take the time to understand your academic background, interests, and long-term career goals. Based on this information, we provide personalized recommendations that align with your aspirations, ensuring you make an informed choice that will set you on the path to success.
                        </p>
                    </div>

                    <div className='w-full flex justify-end items-center'>
                        <button className='px-10 bg-white py-2 text-xl hover:bg-[#84DDDC] hover:text-white rounded-full flex items-center gap-2 font-semibold'>Read More <i class="ri-arrow-right-line text-xl"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesPage2