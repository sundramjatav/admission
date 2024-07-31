import React from 'react'
import doctor from '..//../assets/doctor.png'
import man from '..//../assets/man.svg'
const AboutPage1 = () => {
  return (
    <div className='relative w-full md:h-[90vh] overflow-hidden h-[45vh] bg-gradient-to-r from-[#CDE6EA] to-[#E5F0F2]'>
        <div className='md:block hidden w-[30rem] h-[30rem]  bg-gradient-to-r from-[#84DDDC] to-[#E5F0F2] rotate-45 rounded-full absolute -top-32 -left-24 z-10'></div>
        <div className=' md:w-[34rem] md:h-[34rem] w-72 h-72  bg-gradient-to-r from-[#84DDDC] to-[#E5F0F2] -rotate-45 rounded-full absolute md:top-72 top-32 md:right-32 -right-20 z-10'></div>
        <div className=' absolute top-0 z-20 w-full h-full flex'>
            <div className='w-1/2 h-full md:p-20 p-4'>
            <div className='md:w-[60rem] w-96  h-fit'>
                <h1 className='md:text-7xl text-4xl leading-8 md:w-[80%] font-bold'>Seamless Admission Services for Your  <span className='relative after:-z-10 z-10 after:left-0 md:after:bottom-2 after:bottom-1 after:rounded-full after:absolute after:w-full md:after:h-2 after:h-1 after:bg-[#52C6C5] '>Medical Career</span></h1>
            </div>
            <div>
                <button className='md:px-20 px-6 whitespace-nowrap text-white hover:bg-black text-xl rounded-full md:rounded-lg md:mt-12 mt-3 md:py-3 py-1 bg-[#84DDDC]'>Join us <i class="ri-arrow-left-s-fill"></i></button>
            </div>
            <div className='md:w-64 md:h-48 w-32 rounded-lg bg-white md:ml-[32rem] ml-16 mt-5 gap-2 md:-mt-5 flex flex-col justify-center p-2 items-center' >
                <div className='bg-[#84DDDC] p-2 rounded-lg'><img src={man} className='w-5 md:w-10' alt="" /></div>
                <p className='text-center text-[8px] md:text-lg font-normal'>MBBS (UG, PG), MDS (UG, PG), BDS (UG, PG), BHMS (UG, PG), and BAMS (UG, PG). </p>
            </div>
            </div>
            <div className='w-1/2 h-full'>
                <img src={doctor} className='w-[30rem] md:mt-28 mt-16 md:ml-60' alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutPage1